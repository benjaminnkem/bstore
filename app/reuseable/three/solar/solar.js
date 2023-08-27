import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const sun3D = () => {
  try {
    // scene, camera, light
    const scene = new THREE.Scene();
    const sizes = { width: window.innerWidth / 2, height: window.innerHeight };

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      "/textures/stars.jpg",
      "/textures/stars.jpg",
      "/textures/stars.jpg",
      "/textures/stars.jpg",
      "/textures/stars.jpg",
      "/textures/stars.jpg",
    ]);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x333333);
    const pointLight = new THREE.PointLight(0xffffff, 300);
    pointLight.position.set(-10, 10, 2);

    const sunLight = new THREE.PointLight(0xffffff, 50);
    scene.add(ambientLight, sunLight);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // Objects
    const sunGeo = new THREE.SphereGeometry(4, 64, 64);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffffff, map: textureLoader.load("/textures/2k_sun.jpg") });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    const createTorus = (radius, tube, radialSegments, color) => {
      const torusGeo = new THREE.TorusGeometry(radius, tube, radialSegments);
      const torusMat = new THREE.MeshStandardMaterial({ color });
      const torus = new THREE.Mesh(torusGeo, torusMat);

      scene.add(torus);
      return torus;
    };

    const torusMini = createTorus(5, 0.3, 16, 0xffffff);
    const torusMini2 = createTorus(6, 0.3, 16, 0xffffff);
    const torusMaster = createTorus(7.5, 0.8, 16, 0xf97316);

    // Camera
    const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 300);
    camera.position.set(0, 10, 14);
    scene.add(camera);

    const canvas = document.querySelector("#canva");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false;

    const resizeCanvas = () => {
      sizes.width = window.innerWidth / 2;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", () => resizeCanvas());

    const animate = () => {
      requestAnimationFrame(animate);

      torusMaster.rotation.x += 0.008;
      torusMaster.rotation.y += 0.008;

      torusMini.rotation.x += 0.008;
      torusMini.rotation.z += 0.008;

      torusMini2.rotation.y += 0.008;
      torusMini2.rotation.z += 0.008;

      sun.rotation.y += 0.008;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  } catch (e) {
    console.log(e);
  }
};
