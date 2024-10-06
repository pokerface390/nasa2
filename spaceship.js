import * as THREE from 'three';

export function createSpaceship() {
    const geometry = new THREE.BoxGeometry(0.5, 0.2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const spaceship = new THREE.Mesh(geometry, material);
    return spaceship;
}

export function moveSpaceship(event, spaceship) {
    const speed = 0.1;
    if (event.key === 'ArrowUp') {
        spaceship.position.z -= speed;
    } else if (event.key === 'ArrowDown') {
        spaceship.position.z += speed;
    } else if (event.key === 'ArrowLeft') {
        spaceship.position.x -= speed;
    } else if (event.key === 'ArrowRight') {
        spaceship.position.x += speed;
    }
}
