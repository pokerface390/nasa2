import * as THREE from 'three';

export function createCharacter() {
    const geometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const character = new THREE.Mesh(geometry, material);
    return character;
}

export function showInfo(planetInfo) {
    const characterPanel = document.getElementById('character-speech');
    characterPanel.textContent = planetInfo;
}
