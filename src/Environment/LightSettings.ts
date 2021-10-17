
import {AmbientLight, Camera, CameraHelper, DirectionalLight, Light, Scene} from "three";
// noinspection JSDuplicatedDeclaration
export class LightSettings {

    private _scene: Scene;
    constructor(scene: Scene) {
        this._scene=scene

    }
    public directionalLightManager(){

        const light = new DirectionalLight(0xffffff, 1.5);
        light.castShadow = true;
        light.shadow.camera.left= -1000;
        light.shadow.camera.right= 1000;
        light.shadow.camera.top= 1000;
        light.shadow.camera.bottom= -1000;
        light.shadow.camera.far = 2000;
        light.position.set(400,800,800);
        light.shadow.mapSize.set(512,512);

        const ambientLight = new AmbientLight(0x999999,.5);
        this._scene.add(light);
        this._scene.add(ambientLight);
    }


}