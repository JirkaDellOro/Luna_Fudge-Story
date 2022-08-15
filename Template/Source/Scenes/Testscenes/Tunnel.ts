namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {

    let locTunnel = {
      name: "Tunnel",
      background:
        "./Assets/Test_Minigame_Demon/Standbild_Test.png"
    };

    await ƒS.Location.show(locTunnel);

    let graph: ƒ.Node = ƒS.Base.getGraph();
    console.log(graph);
    graph.addComponent(new ƒ.ComponentTransform());
    let viewport: ƒ.Viewport = Reflect.get(ƒS.Base, "viewport");
    let camera: ƒ.ComponentCamera = viewport.camera;
    camera.projectCentral(camera.getAspect(), camera.getFieldOfView(), camera.getDirection(), camera.getNear(), 2 * camera.getFar());

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    function loopFrame(_event: Event): void {

      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT])) {
        graph.mtxLocal.translateX(10);
      }
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT])) {
        graph.mtxLocal.translateX(-10);
      }

      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP])) {
        graph.mtxLocal.translateZ(-10);
      }
      if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S, ƒ.KEYBOARD_CODE.ARROW_DOWN])) {
        graph.mtxLocal.translateZ(10);
      }



      ƒS.update(0);
    }

    let escape = {
      iEscape: "Escape"
    };

    await ƒS.Menu.getInput(escape, "choicesCSSclass");


    graph.cmpTransform.mtxLocal = ƒ.Matrix4x4.IDENTITY();
    ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    ƒS.update(0);
  }
}