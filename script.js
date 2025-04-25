import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { gsap } from 'https://cdn.skypack.dev/gsap'

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const body = document.body;

const camera = new THREE.PerspectiveCamera(
	10,
	window.innerWidth/window.innerHeight,
	0.1,
	1000);

camera.position.z = 13;

let endText = document.getElementById('ending');
let logo = document.getElementById('logo')
endText.style.visibility = "hidden";
logo.style.visibility = "hidden";

let faded = false;
let imglarge = false;


function fadeOut(){
  //endText.style.opacity = 1;
 	if (endText.style.visibility == "visible"){
 		(function fade() {
	    if ((endText.style.opacity -= .05) < 0) {
	      endText.style.visibility = "hidden";
	      logo.style.visibility = "hidden";
	    } else {
	      requestAnimationFrame(fade);
	    }
	  })();
 	}
 	faded = false;
  
}



function fadeIn(){
  //endText.style.opacity = 0;
  if (endText.style.visibility == "hidden"){
	  (function fade() {
	    var val = parseFloat(endText.style.opacity);
	    if (!((val += .05) > 1)) {
	      endText.style.opacity = val;
	      requestAnimationFrame(fade);
	      endText.style.visibility = "visible";
	      logo.style.visibility = "visible";
	    }
	  })();
	}
	faded = true;
}

let scrollPosY = 0;
let currentParentPos = 0;

let initialPosition = {x: 0, y: -0.3, z: 4};
let initialRotation = {x: 0.3, y: 3.14};

let cubeinity = -2;
let cubeinitx = 2
let initialpz = 4;

let inityp = 0;

const scene = new THREE.Scene();
let bee;
const loader = new GLTFLoader();

let clickable = false;

const vid = document.getElementById('vidA');
const videoTexture = new THREE.VideoTexture(vid);

const imga = document.getElementById('imga')
const tex = new THREE.TextureLoader().load(imga.src, () =>{
	THREE.Cache.clear();
});


const imgb = document.getElementById('imgb')
const tex2 = new THREE.TextureLoader().load(imgb.src, () =>{
	THREE.Cache.clear();
});

const imgc = document.getElementById('imgc')
const tex3 = new THREE.TextureLoader().load(imgc.src, () =>{
	THREE.Cache.clear();
});

const imgd = document.getElementById('imgd')
const tex4 = new THREE.TextureLoader().load(imgd.src, () =>{
	THREE.Cache.clear();
});

const imge = document.getElementById('imge')
const tex5 = new THREE.TextureLoader().load(imge.src, () =>{
	THREE.Cache.clear();
});

const imgf = document.getElementById('imgf')
const tex6 = new THREE.TextureLoader().load(imgf.src, () =>{
	THREE.Cache.clear();
});

const imgg = document.getElementById('imgg')
const tex7 = new THREE.TextureLoader().load(imgg.src, () =>{
	THREE.Cache.clear();
});

const imgh = document.getElementById('imgh')
const tex8 = new THREE.TextureLoader().load(imgh.src, () =>{
	THREE.Cache.clear();
});

const imgi = document.getElementById('imgi')
const tex9 = new THREE.TextureLoader().load(imgi.src, () =>{
	THREE.Cache.clear();
});

const imgj = document.getElementById('imgj')
const tex10 = new THREE.TextureLoader().load(imgj.src, () =>{
	THREE.Cache.clear();
});

const imgk = document.getElementById('imgk')
const tex11 = new THREE.TextureLoader().load(imgk.src, () =>{
	THREE.Cache.clear();
});

const fall = document.getElementById("text");
console.log(fall)
fall.style.display = "none";
fall.style.top = 0;

const fall2 = document.getElementById("text2");
console.log(fall2)
fall2.style.display = "none";
fall2.style.top = 0;

const fall3 = document.getElementById("text3");
fall3.style.display = "none";
fall3.style.top = 0;

const fall4 = document.getElementById("text4");
fall4.style.display = "none";
fall4.style.top = 0;

const fall5 = document.getElementById("text5");
fall5.style.display = "none";
fall5.style.top = 0;

const fall6 = document.getElementById("text6");
fall6.style.display = "none";
fall6.style.top = 0;

const fall7 = document.getElementById("text7");
fall7.style.display = "none";
fall7.style.top = 0;

const fall8 = document.getElementById("text8");
fall8.style.display = "none";
fall8.style.top = 0;

const fall9 = document.getElementById("text9");
fall9.style.display = "none";
fall9.style.top = 0;

const fall10 = document.getElementById("text10");
fall10.style.display = "none";
fall10.style.top = 0;

const fall11 = document.getElementById("text11");
fall11.style.display = "none";
fall11.style.top = 0;

vid.addEventListener('loadeddata', () => {
    vid.play();
    videoTexture.needsUpdate = true;
});
vid.currentTime = 10;


function parents(rotY) {
	const parent = new THREE.Object3D();
	parent.scale.x = 0.5;
	parent.scale.y = 0.5;
	parent.scale.z = 0.5;
	parent.rotation.y = rotY;

	parent.position.z = initialpz;
	return parent;
	
}


function cubes(cposY, text){
	const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 


	if (text.isTexture) {
		text.wrapS = THREE.RepeatWrapping;
		text.wrapT = THREE.RepeatWrapping;
	} else if (text.isVideoTexture){
		geometry.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
		text.minFilter = THREE.LinearFilter;
		text.magFilter = THREE.LinearFilter;
		text.format = THREE.RGBFormat;
	}


	const material = new THREE.MeshBasicMaterial( {map: text, side: THREE.FrontSide, toneMapped: false,} ); 


	console.log(material)


	const cube = new THREE.Mesh(geometry, material); 

	console.log(cube);

	cube.position.x = 2;
	cube.position.y = cposY;

	cube.scale.x = 0.01;
	cube.scale.y = 0.2;
	cube.scale.z = 0.4;



	return cube;
}


const floadera = new FontLoader();
let textMesh1 = new THREE.Mesh();

const floaderb = new FontLoader();
let textMesh2 = new THREE.Mesh();

const floaderc = new FontLoader();
let textMesh3 = new THREE.Mesh();

const floaderd = new FontLoader();
let textMesh4 = new THREE.Mesh();

const floadere = new FontLoader();
let textMesh5 = new THREE.Mesh();

const floaderf = new FontLoader();
let textMesh6 = new THREE.Mesh();

const floaderg = new FontLoader();
let textMesh7 = new THREE.Mesh();

const floaderh = new FontLoader();
let textMesh8 = new THREE.Mesh();

const floaderi = new FontLoader();
let textMesh9 = new THREE.Mesh();

const floaderj = new FontLoader();
let textMesh10 = new THREE.Mesh();

const floaderk = new FontLoader();
let textMesh11 = new THREE.Mesh();


//const play1 = new playgeo();
const cubeA = new cubes(-2, tex);
const parentA = new parents(1);

//cubeA.add(play1)
parentA.add(cubeA);
scene.add(parentA);

floadera.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('11:56 25 April 2015', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh1.geometry = geometry
	textMesh1.material = textMaterial
	textMesh1.rotation.y = 1.65
	textMesh1.position.x = 3
	textMesh1.position.y = -0.65
	textMesh1.position.z = 0.23

	textMesh1.scale.y = 0

	cubeA.add(textMesh1);

	THREE.Cache.clear();

} );


// function readTextMesh() {
// 	return new Promise((resolve, reject) => {
// 		const floader = new FontLoader();
// 		floader.load('./fonts/nueue.json', (nueue) => {
// 			const geometry = new THREE.TextGeometry('Video1', {
// 				font: nueue,
// 				size: 0.1,
// 				height: 0.001,
// 			});

// 			const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
// 			const textMesh = new THREE.Mesh(geometry, material);

// 			textMesh.rotation.y = 1.65;
// 			textMesh.position.set(2, -0.4, 0.4);

// 			resolve(textMesh); // Return the mesh
// 		}, undefined, reject);
// 	});
// }

//const textMesh = new readTextMesh();

// cubeA.add(textMesh);


//const play2 = new readgeo();
const cubeB = new cubes(-3.1, tex2);
const parentB = new parents(2);

//cubeB.add(play2);
parentB.add(cubeB);
scene.add(parentB);

floaderb.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('The Earthquake from Above', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh2.geometry = geometry
	textMesh2.material = textMaterial
	textMesh2.rotation.y = 1.65
	textMesh2.position.x = 3
	textMesh2.position.y = -0.65
	textMesh2.position.z = 0.3

	textMesh2.scale.y = 0

	cubeB.add(textMesh2);

	THREE.Cache.clear();

} );

const cubeC = new cubes(-4.2, tex3);
const parentC = new parents(3);

parentC.add(cubeC);
scene.add(parentC);

floaderc.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Langtang After 10 Years', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh3.geometry = geometry
	textMesh3.material = textMaterial
	textMesh3.rotation.y = 1.65
	textMesh3.position.x = 3
	textMesh3.position.y = -0.65
	textMesh3.position.z = 0.3

	textMesh3.scale.y = 0

	cubeC.add(textMesh3);

	THREE.Cache.clear();

} );

const cubeD = new cubes(-5.3, tex4);
const parentD = new parents(4);

parentD.add(cubeD);
scene.add(parentD);

floaderd.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Bhaktapur 2.0', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh4.geometry = geometry
	textMesh4.material = textMaterial
	textMesh4.rotation.y = 1.65
	textMesh4.position.x = 3
	textMesh4.position.y = -0.65
	textMesh4.position.z = 0.195

	textMesh4.scale.y = 0

	cubeD.add(textMesh4);

	THREE.Cache.clear();

} );

const cubeE = new cubes(-6.4, tex5);
const parentE = new parents(5);

parentE.add(cubeE);
scene.add(parentE);


floadere.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Bungamati Builds Back', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh5.geometry = geometry
	textMesh5.material = textMaterial
	textMesh5.rotation.y = 1.65
	textMesh5.position.x = 3
	textMesh5.position.y = -0.65
	textMesh5.position.z = 0.28

	textMesh5.scale.y = 0

	cubeE.add(textMesh5);

	THREE.Cache.clear();

} );

const cubeF = new cubes(-7.5, tex6);
const parentF = new parents(6);

parentF.add(cubeF);
scene.add(parentF);


floaderf.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('It Better Be Better Next Time', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh6.geometry = geometry
	textMesh6.material = textMaterial
	textMesh6.rotation.y = 1.65
	textMesh6.position.x = 3
	textMesh6.position.y = -0.65
	textMesh6.position.z = 0.35

	textMesh6.scale.y = 0

	cubeF.add(textMesh6);

	THREE.Cache.clear();

} );

const cubeG = new cubes(-8.6, tex7);
const parentG = new parents(7);

parentG.add(cubeG);
scene.add(parentG);


floaderg.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Loss of Soul and Soil', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh7.geometry = geometry
	textMesh7.material = textMaterial
	textMesh7.rotation.y = 1.65
	textMesh7.position.x = 3
	textMesh7.position.y = -0.65
	textMesh7.position.z = 0.27

	textMesh7.scale.y = 0

	cubeG.add(textMesh7);

	THREE.Cache.clear();

} );

const cubeH = new cubes(-9.7, tex8);
const parentH = new parents(8);

parentH.add(cubeH);
scene.add(parentH);


floaderh.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Structural Problems', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh8.geometry = geometry
	textMesh8.material = textMaterial
	textMesh8.rotation.y = 1.65
	textMesh8.position.x = 3
	textMesh8.position.y = -0.65
	textMesh8.position.z = 0.25

	textMesh8.scale.y = 0

	cubeH.add(textMesh8);

	THREE.Cache.clear();

} );

const cubeI = new cubes(-10.8, tex9);
const parentI = new parents(9);

parentI.add(cubeI);
scene.add(parentI);


floaderi.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Yes, Quakes can be Forecast', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh9.geometry = geometry
	textMesh9.material = textMaterial
	textMesh9.rotation.y = 1.65
	textMesh9.position.x = 3
	textMesh9.position.y = -0.65
	textMesh9.position.z = 0.35

	textMesh9.scale.y = 0

	cubeI.add(textMesh9);

	THREE.Cache.clear();

} );

const cubeJ = new cubes(-11.9, tex10);
const parentJ = new parents(10);

parentJ.add(cubeJ);
scene.add(parentJ);

floaderj.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Editorial Journalism', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh10.geometry = geometry
	textMesh10.material = textMaterial
	textMesh10.rotation.y = 1.65
	textMesh10.position.x = 3
	textMesh10.position.y = -0.65
	textMesh10.position.z = 0.35

	textMesh10.scale.y = 0

	cubeJ.add(textMesh10);

	THREE.Cache.clear();

} );


const cubeK = new cubes(-13, tex11);
const parentK = new parents(11);

parentK.add(cubeK);
scene.add(parentK);

floaderk.load('/earthquake/fonts/nueue.json', (nueue) => {
	const geometry = new THREE.TextGeometry('Towering Monument to 2015', {
		font: nueue,
		size: 0.05,
		height: 0.001,
	});
	const textMaterial = new THREE.MeshBasicMaterial({color: 'black' });
	textMesh11.geometry = geometry
	textMesh11.material = textMaterial
	textMesh11.rotation.y = 1.65
	textMesh11.position.x = 3
	textMesh11.position.y = -0.65
	textMesh11.position.z = 0.35

	textMesh11.scale.y = 0

	cubeK.add(textMesh11);

	THREE.Cache.clear();

} );

const parentList = [parentA, parentB, parentC, parentD, parentE, parentF, parentG, parentH, parentI, parentJ, parentK]
const cubeList = [cubeA, cubeB, cubeC, cubeD, cubeE, cubeF, cubeG, cubeH, cubeI, cubeJ, cubeK]
const textList = [textMesh1, textMesh2, textMesh3, textMesh4, textMesh5, textMesh6, textMesh7, textMesh8, textMesh9, textMesh10, textMesh11];
let bigbox = 0;
//console.log(textMesh)


function motionblur() {
	for (var i = 0; i < 11; i++) {
		if ((4.125 <= parentList[i].rotation.y && parentList[i].rotation.y <= 5.5)) {
			bigbox = i;
			if (vid.paused && fall.style.display == "none" && fall2.style.display == 'none' && fall3.style.display == 'none' && fall4.style.display == 'none' && fall5.style.display == 'none' && fall6.style.display == 'none' && fall7.style.display == 'none' && fall8.style.display == 'none' && fall9.style.display == 'none' && fall10.style.display == 'none' && fall11.style.display == 'none') {
				gsap.to(cubeList[i].scale, {y: 0.8, duration: 0.5})
				gsap.to(cubeList[i].scale, {z: 1.3, duration: 0.5})
				gsap.to(cubeList[i].rotation, {y: 0, duration: 0.5});
				gsap.to(cubeList[i].position, {z: 0, duration: 0.5});
				gsap.to(cubeList[i].position, {x: 2, duration: 0.5});
				gsap.to(textList[i].scale, {y: 2, duration: 0.5})
			} else{
				gsap.to(cubeList[i].scale, {y: 1.4, duration: 0.5});
	        	gsap.to(cubeList[i].scale, {z: 2, duration: 0.5});
	        	gsap.to(cubeList[i].rotation, {y: 3.14, duration: 0.5});
	        	gsap.to(cubeList[i].position, {y: 0, duration: 0.5});
	        	gsap.to(cubeList[i].position, {z: 1, duration: 0.5});
	        	gsap.to(cubeList[i].position, {x: 1, duration: 0.5});
	        	gsap.to(textList[i].scale, {y: 0, duration: 0.5})
			}
			clickable = true;
		} else if (parentList[i].rotation.y < 4.125 || parentList[i].rotation.y > 5.5) {
			gsap.to(cubeList[i].scale, {y: 0.2, duration: 0.5});
			gsap.to(cubeList[i].scale, {z: 0.4, duration: 0.5});
			gsap.to(cubeList[i].rotation, {y: 0, duration: 0.5});
			gsap.to(cubeList[i].position, {z: 0, duration: 0.5});
			gsap.to(cubeList[i].position, {x: 2, duration: 0.5});
			gsap.to(textList[i].scale, {y: 0, duration: 0.5})

		}
	}
	if (parentList[bigbox].rotation.y < 4.125 || parentList[bigbox].rotation.y > 5.5){
		clickable = false;
	}
}

console.log(cubeList[bigbox]);

loader.load('/earthquake/assetA.glb',
	function (gltf) {
		bee = gltf.scene;
		bee.position.x = initialPosition.x;
		bee.position.z = initialPosition.z;
		bee.position.y = initialPosition.y;
		bee.rotation.y = initialRotation.y;
		bee.rotation.x = initialRotation.x;
		bee.scale.y = 0.04;
		bee.scale.x = 0.04;
		bee.scale.z = 0.04;

		scene.add(bee);
		THREE.Cache.clear();

	},
	function (xhr) {},
	function (err) {}
	);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
const obj = document.getElementById('container3d').appendChild(renderer.domElement);



const ambientLight = new THREE.AmbientLight(0xffffff, 4);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0x87CEFA, 5);
topLight.position.set(20, 500, 0);
scene.add(topLight);

const keylight = new THREE.DirectionalLight(0xFFB6C1, 3);
keylight.position.set(0, 200, 0);
scene.add(keylight);

const controls = new OrbitControls(camera, renderer.domElement);

const particlesGeometry = new THREE.BufferGeometry;
const prtcls = 5000;

const posArray = new Float32Array(prtcls*3);

for (let i = 0; i < prtcls*3; i++) {
	posArray[i] = (Math.random() - 0.5)* (Math.random() *5)
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

const pmaterial = new THREE.PointsMaterial({
	size: 0.005,
	color: 'gray',
	transparent: true,
	blending: THREE.AdditiveBlending
})

const prtclMesh = new THREE.Points(particlesGeometry, pmaterial)

parentA.add(prtclMesh)

const clock = new THREE.Clock();

const reRender3d = () => {
	requestAnimationFrame(reRender3d);
	const elapsedtime = clock.getElapsedTime();
	prtclMesh.rotation.y = -.1 *elapsedtime;
	prtclMesh.rotation.x = -.1 *elapsedtime

	if (vid.readyState >= vid.HAVE_CURRENT_DATA) {  
        videoTexture.needsUpdate = true; 
    }
	renderer.render(scene, camera);
};
reRender3d();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});


const modelMove = () => {
	scrollPosY = (window.scrollY/document.body.clientHeight);
	bee.rotation.y = initialRotation.y + -1.8 * Math.PI * scrollPosY;
	bee.rotation.x = initialRotation.x + (-0.5* scrollPosY);
	bee.position.y = initialPosition.y + -0.1 * scrollPosY;
	bee.position.z = initialPosition.z +  4 * scrollPosY;

	parentA.rotation.y = -1.2 + 30*scrollPosY;
	parentA.position.z = initialpz +  4 * scrollPosY;
	cubeA.position.y = cubeinity  + 10*scrollPosY;

	parentB.rotation.y = -3.4 + 30*scrollPosY;
	parentB.position.z = initialpz +  4 * scrollPosY;
	cubeB.position.y = cubeinity - 0.65 + 10*scrollPosY;

	parentC.rotation.y = -5.6 + 30*scrollPosY;
	parentC.position.z = initialpz +  4 * scrollPosY;
	cubeC.position.y = cubeinity - 1.3 + 10*scrollPosY;

	parentD.rotation.y = -7.8 + 30*scrollPosY;
	parentD.position.z = initialpz +  4 * scrollPosY;
	cubeD.position.y = cubeinity - 1.3-0.65 + 10*scrollPosY;

	parentE.rotation.y = -10 + 30*scrollPosY;
	parentE.position.z = initialpz +  4 * scrollPosY;
	cubeE.position.y = cubeinity - 2.6 + 10*scrollPosY;

	parentF.rotation.y = -12.2 + 30*scrollPosY;
	parentF.position.z = initialpz +  4 * scrollPosY;
	cubeF.position.y = cubeinity - 2.6-0.65 + 10*scrollPosY;

	parentG.rotation.y = -14.4 + 30*scrollPosY;
	parentG.position.z = initialpz +  4 * scrollPosY;
	cubeG.position.y = cubeinity - 3.9 + 10*scrollPosY;

	parentH.rotation.y = -16.6 + 30*scrollPosY;
	parentH.position.z = initialpz +  4 * scrollPosY;
	cubeH.position.y = cubeinity - 3.9 -0.65 + 10*scrollPosY;

	parentI.rotation.y = -18.8 + 30*scrollPosY;
	parentI.position.z = initialpz +  4 * scrollPosY;
	cubeI.position.y = cubeinity - 3.9 -0.65 -0.65 + 10*scrollPosY;

	parentJ.rotation.y = -21 + 30*scrollPosY;
	parentJ.position.z = initialpz +  4 * scrollPosY;
	cubeJ.position.y = cubeinity - 3.9 -1.3 - 0.65 + 10*scrollPosY;

	parentK.rotation.y = -23.2 + 30*scrollPosY;
	parentK.position.z = initialpz +  4 * scrollPosY;
	cubeK.position.y = cubeinity - 3.9 - 2.6 + 10*scrollPosY;


	motionblur();
}

let scrollTop = 0;
let scrollLeft = 0;

function disableScroll() {
    // Get the current page scroll position
            scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop;
            scrollLeft =
                window.pageXOffset ||
                document.documentElement.scrollLeft,

                // if any scroll is attempted,
                // set this to the previous value
                window.onscroll = function () {
                    window.scrollTo(scrollLeft, scrollTop);
                };
        }

function enableScroll() {
            window.onscroll = function () { };
        }



document.addEventListener("click", () => {
	if (clickable == true) {
		if (cubeList[bigbox].material.map.isVideoTexture) {
			if (vid.paused) {
				vid.currentTime = 0;
		        vid.play().catch(err => console.error("Video play error:", err));
		        gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
		        disableScroll(); 

		    } else {
		    	vid.pause();
		    	vid.currentTime = 10;
		    	gsap.to(parentA.rotation, {y: currentParentPos, duration: 0.5});
		    	enableScroll();
		    }

		} else {
			if ((bigbox == 0) && (fall.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall.style.top = (window.scrollY).toString() + "px"
				fall.style.display = "flex";
				fall.style.transition = "opacity 0.5s"
				disableScroll();
			} 
			else if ((bigbox == 1) && (fall2.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall2.style.top = window.scrollY.toString() + "px";
				fall2.style.display = "flex";
				fall2.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 2) && (fall3.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall3.style.top = window.scrollY.toString() + "px";
				fall3.style.display = "flex";
				fall3.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 3) && (fall4.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall4.style.top = window.scrollY.toString() + "px";
				fall4.style.display = "flex";
				fall.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 4) && (fall5.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall5.style.top = window.scrollY.toString() + "px";
				fall5.style.display = "flex";
				fall5.style.transition = "opacity 0.5s"
				disableScroll();
			} else if ((bigbox == 5) && (fall6.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall6.style.top = window.scrollY.toString() + "px";
				fall6.style.display = "flex";
				fall6.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 6) && (fall7.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall7.style.top = window.scrollY.toString() + "px";
				fall7.style.display = "flex";
				fall7.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 7) && (fall8.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall8.style.top = window.scrollY.toString() + "px";
				fall8.style.display = "flex";
				fall8.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 8) && (fall9.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall9.style.top = window.scrollY.toString() + "px";
				fall9.style.display = "flex";
				fall9.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 9) && (fall10.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall10.style.top = window.scrollY.toString() + "px";
				fall10.style.display = "flex";
				fall10.style.transition = "opacity 0.5s"
				disableScroll();
			}else if ((bigbox == 10) && (fall11.style.display == "none")) {
				gsap.to(parentList[bigbox].rotation, {y: 4.7, duration: 0.5});
				fall11.style.top = window.scrollY.toString() + "px";
				fall11.style.display = "flex";
				fall11.style.transition = "opacity 0.5s"
				disableScroll();
			}else{
				gsap.to(parentList[bigbox].rotation, {y: currentParentPos, duration: 0.5});
				fall.style.display = "none";
				fall2.style.display = "none";
				fall3.style.display = "none";
				fall4.style.display = "none";
				fall5.style.display = "none";
				fall6.style.display = "none";
				fall7.style.display = "none";
				fall8.style.display = "none";
				fall9.style.display = "none";
				fall10.style.display = "none";
				fall11.style.display = "none";
	
				enableScroll();
			}
		}
	}
	motionblur();  
});


window.addEventListener('scroll', () => {
	if (bee){
		currentParentPos = parentList[bigbox].rotation.y;
		if(vid.paused && fall.style.display == 'none' && fall2.style.display == 'none' && fall3.style.display == 'none' && fall4.style.display == 'none' && fall5.style.display == 'none' && fall6.style.display == 'none' && fall7.style.display == 'none' && fall8.style.display == 'none' && fall9.style.display == 'none' && fall10.style.display == 'none' && fall11.style.display == 'none' ){
			modelMove();
		}
		if ((window.scrollY > document.documentElement.scrollHeight - 1000) && (faded == false)) {
			fadeIn();
		} else if ((window.scrollY < document.documentElement.scrollHeight - 1000) && (faded == true)){
			fadeOut();
		}
	}

})