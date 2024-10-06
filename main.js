                import * as THREE from 'three';
                import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

                // Configuración de la escena, cámara y renderizado
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
                const renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(renderer.domElement);

                // Control de cámara
                const controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;
                controls.enableZoom = true;
                controls.enablePan = true;
                camera.position.set(0, 100, 400);

                // Fondo de estrellas
                const starsGeometry = new THREE.BufferGeometry();
                const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
                const starsVertices = [];

                for (let i = 0; i < 20000; i++) {
                    const x = Math.random() * 8000 - 4000;
                    const y = Math.random() * 8000 - 4000;
                    const z = Math.random() * 8000 - 4000;
                    starsVertices.push(x, y, z);
                }

                starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
                const stars = new THREE.Points(starsGeometry, starsMaterial);
                scene.add(stars);

                // Iluminación
                const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
                scene.add(ambientLight);

                const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
                pointLight.position.set(0, 0, 0);
                scene.add(pointLight);

                // Añadir el Sol
                const sunGeometry = new THREE.SphereGeometry(30, 32, 32);
                const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
                const sun = new THREE.Mesh(sunGeometry, sunMaterial);
                scene.add(sun);

                // Datos de exoplanetas (50 planetas dispersos)
                const planetsData = Array.from({ length: 50 }, (_, index) => ({
                    name: `Exoplaneta ${index + 1}`,
                    size: Math.random() * (10 - 3) + 3,
                    distance: Math.random() * 600 + 200,
                    speed: Math.random() * 0.06 + 0.02,
                    color: Math.random() * 0xffffff,
                    description: `Descripción del Exoplaneta ${index + 1}.`
                }));

                // Añadir exoplanetas a la escena
                const planets = [];
                planetsData.forEach((planetData) => {
                    const planetGeometry = new THREE.SphereGeometry(planetData.size, 32, 32);
                    const planetMaterial = new THREE.MeshBasicMaterial({ color: planetData.color });
                    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
                    
                    const angle = Math.random() * Math.PI * 2;
                    const radius = planetData.distance + Math.random() * 100;
                    planet.position.set(
                        radius * Math.cos(angle),
                        (Math.random() * 800) - 400,
                        radius * Math.sin(angle)
                    );
                    planet.userData = planetData;
                    
                    scene.add(planet);
                    planets.push({ mesh: planet, data: planetData });
                });

                // Variables para la nave espacial
                let spaceship;
                let currentPlanet = null;

                // Variables para el manejo de constelaciones
                let constellationLines = [];
                let constellationConnections = [];
                let constellationsActive = false;

                // Función para crear constelaciones
                function createBeautifulConstellations() {
                    removeConstellations();

                    const connectionMaterial = new THREE.LineBasicMaterial({
                        color: 0x00ff00,
                        transparent: true,
                        opacity: 0.7,
                        linewidth: 2
                    });

                    const minDistance = 150;

                    for (let i = 0; i < 6; i++) {
                        const constellationSize = Math.floor(Math.random() * 7) + 5;
                        const startPlanet = planets[Math.floor(Math.random() * planets.length)].mesh;
                        const constellationPlanets = [startPlanet];
                        
                        for (let j = 0; j < constellationSize - 1; j++) {
                            const lastPlanet = constellationPlanets[constellationPlanets.length - 1];
                            
                            let nearestPlanets = planets
                                .map(p => p.mesh)
                                .filter(p => !constellationPlanets.includes(p) &&
                                    lastPlanet.position.distanceTo(p.position) > minDistance)
                                .sort((a, b) => {
                                    const distA = lastPlanet.position.distanceTo(a.position);
                                    const distB = lastPlanet.position.distanceTo(b.position);
                                    return distA - distB;
                                });
                            
                            if (nearestPlanets.length > 0) {
                                const nextPlanet = nearestPlanets[0];
                                constellationPlanets.push(nextPlanet);
                                
                                const points = [
                                    lastPlanet.position.clone(),
                                    nextPlanet.position.clone()
                                ];
                                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                                const line = new THREE.Line(lineGeometry, connectionMaterial);
                                scene.add(line);
                                constellationLines.push(line);
                                
                                constellationConnections.push({ line, startPlanet: lastPlanet, endPlanet: nextPlanet });
                            }
                        }
                    }
                    constellationsActive = true;
                }

                // Función para eliminar constelaciones
                function removeConstellations() {
                    constellationLines.forEach(line => scene.remove(line));
                    constellationLines = [];
                    constellationConnections = [];
                    constellationsActive = false;
                }

                // Función para actualizar las líneas de las constelaciones
                function updateConstellations() {
                    constellationConnections.forEach(({ line, startPlanet, endPlanet }) => {
                        const positions = line.geometry.attributes.position.array;
                        positions[0] = startPlanet.position.x;
                        positions[1] = startPlanet.position.y;
                        positions[2] = startPlanet.position.z;
                        positions[3] = endPlanet.position.x;
                        positions[4] = endPlanet.position.y;
                        positions[5] = endPlanet.position.z;
                        line.geometry.attributes.position.needsUpdate = true;
                    });
                }

                // Función para actualizar la animación de las constelaciones
                function updateConstellationAnimation() {
                    constellationLines.forEach((line, index) => {
                        if (line instanceof THREE.Line) {
                            const material = line.material;
                            material.opacity = 0.5 + Math.sin(Date.now() * 0.001 + index * 0.5) * 0.2;
                        }
                    });
                }

                // Variables para controlar el movimiento de la nave
                let targetPlanet = null;
                let travelStartTime = 0;
                const travelDuration = 3000;

                // Función para mover la nave hacia el exoplaneta
                function moveSpaceshipToPlanet(planet) {
                    targetPlanet = planet;
                    travelStartTime = Date.now();
                }

                // Configuración de arrastrar y soltar
                const spaceshipImg = document.getElementById('draggable-spaceship');
                let isDragging = false;
                spaceshipImg.addEventListener('dragstart', (event) => {
                    isDragging = true;
                    event.dataTransfer.setData('text/plain', 'spaceship');
                });

                renderer.domElement.addEventListener('dragover', (event) => {
                    event.preventDefault();
                });

                renderer.domElement.addEventListener('drop', (event) => {
                    event.preventDefault();
                    if (isDragging) {
                        const mouse = new THREE.Vector2();
                        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                        const raycaster = new THREE.Raycaster();
                        raycaster.setFromCamera(mouse, camera);
                        const intersects = raycaster.intersectObjects(planets.map(p => p.mesh));

                        if (intersects.length > 0) {
                            const planetMesh = intersects[0].object;
                            const planetData = planetMesh.userData;
                            moveSpaceshipToPlanet(planetMesh);
                            currentPlanet = planetMesh;

                            // Actualizar tanto el panel de información como el elemento planet-info
                            const planetInfoElement = document.getElementById('planet-info');
                            const infoElement = document.getElementById('info-panel');
                            const infoContent = `
                                <h2>${planetData.name}</h2>
                                <p>${planetData.description}</p>
                            `;
                            if (planetInfoElement) planetInfoElement.innerHTML = infoContent;
                            if (infoElement) infoElement.innerHTML = infoContent;
                        }
                    }
                    isDragging = false;
                });

                // Animación
                function animate() {
                    requestAnimationFrame(animate);
                    
                    // Actualizar la posición de los planetas
                    planets.forEach(p => {
                        p.mesh.position.x = p.data.distance * Math.cos(Date.now() * 0.0002 * p.data.speed);
                        p.mesh.position.z = p.data.distance * Math.sin(Date.now() * 0.0002 * p.data.speed);
                    });

                    if (targetPlanet) {
                        const elapsedTime = Date.now() - travelStartTime;
                        if (elapsedTime < travelDuration) {
                            const t = elapsedTime / travelDuration;
                            camera.position.lerp(targetPlanet.position.clone().add(new THREE.Vector3(0, 10, 20)), t);
                        } else {
                            targetPlanet = null;
                        }
                    }

                    if (currentPlanet) {
                        controls.target.copy(currentPlanet.position);
                    }

                    if (constellationsActive) {
                        updateConstellations();
                        updateConstellationAnimation();
                    }

                    controls.update();
                    renderer.render(scene, camera);
                }

                // Iniciar animación y crear constelaciones iniciales
                animate();
                createBeautifulConstellations();

                // Configuración del botón de alternar constelaciones
                const toggleConstellationsButton = document.getElementById('toggle-constellations');
                if (toggleConstellationsButton) {
                    toggleConstellationsButton.addEventListener('click', () => {
                        if (constellationsActive) {
                            removeConstellations();
                        } else {
                            createBeautifulConstellations();
                        }
                    });
                }

                // Configuración del doble clic en el nuevo icono
                const newIcon = document.getElementById('new-icon');
                if (newIcon) {
                    newIcon.ondblclick = () => {
                        if (constellationsActive) {
                            removeConstellations();
                        } else {
                            createBeautifulConstellations();
                        }
                    };
                }

                // Manejo del cambio de tamaño de la ventana
                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
                renderer.domElement.addEventListener('drop', (event) => {
                    event.preventDefault();
                    if (isDragging) {
                        const mouse = new THREE.Vector2();
                        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                
                        const raycaster = new THREE.Raycaster();
                        raycaster.setFromCamera(mouse, camera);
                        const intersects = raycaster.intersectObjects(planets.map(p => p.mesh));
                
                        if (intersects.length > 0) {
                            const planetMesh = intersects[0].object;
                            const planetData = planetMesh.userData;
                
                            // Mover la nave hacia el planeta
                            moveSpaceshipToPlanet(planetMesh);
                            currentPlanet = planetMesh;
                
                            // Actualizar tanto el panel de información como el elemento planet-info
                            const planetInfoElement = document.getElementById('planet-info');
                            const infoElement = document.getElementById('info-panel');
                            const infoContent = `
                                <h2>${planetData.name}</h2>
                                <p>${planetData.description}</p>
                            `;
                            if (planetInfoElement) planetInfoElement.innerHTML = infoContent;
                            if (infoElement) infoElement.innerHTML = infoContent;  // Asegúrate de que este elemento exista
                        }
                    }
                    isDragging = false;
                });
                