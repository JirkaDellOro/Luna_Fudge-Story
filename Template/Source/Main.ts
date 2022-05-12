namespace LunasNamespace {
  export import ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  console.log("was anderes");

  let weihnachtsdeko = "Lichterketten, Baumkerzen, Lebkuchen, kerzen"; //let bedeutet: ich hab hier eine neue box, die ich beschriften muss (weihnachtsdekobox); = "was ist in der kiste", danach sit der befehl vorbei, also ;
  console.log(weihnachtsdeko); //
  console.log("weihnachtsdeko"); //

  let x = 2; //variablen haben immer einen typus, zb strings "" lange zeichenketten. bei einer zahl ohne "" = number. Object auch ein typ
  let y = 7;
  let z = x + y;
  console.log(z);
  z = z + 1;
  console.log(z);

  // funktionen machen was mit Zeug innendrin, Fabrik mit Heinzelmännchen, ich leg denen was rein und die machen was damit
  export function NameDerFunktion() {
    // hiermit habe ich funktionen initiiert, aber ich benutze sie nirgendwo
    console.log("irgendwas");
  } // export heißt, dass diese funktion auch von anderen szenen aufrufbar ist
  NameDerFunktion();
  NameDerFunktion();
  NameDerFunktion();
  NameDerFunktion();
  NameDerFunktion();

  export function Addition(Zahl1: number = 1, Zahl2: number = 2) {
    // 1 und 2 sind nur default werte
    let summe = Zahl1 + Zahl2;
    console.log("Die Summe von Zahl1 und Zahl2 ist");
    console.log(summe);
  }
  Addition();
  Addition(4, 7);
  Addition(x, y);
  // //vorher kommentieren, was man hier macht, in dem fall export transitions

  export let dataForSave = {
    // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
    nameProtagonist: "", // können Eingabefeld machen, wo die Spielerin den Name eingeben kann
    score: 0, // wenn es zb Punktestand gibt
  };

  export function showCredits(): void {
    ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
    // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
    ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
  }

  //**** MENÜ ****/
  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits",
  }; // volume noch dazu

  let gameMenu: ƒS.Menu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons

  let menuIsOpen: boolean = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist

  // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close(), (menuIsOpen = false); // false = geschlossen
        break;
      case inGameMenuButtons.credits:
        showCredits(); // dafür gibts noch keine Funktion, deshalb rot. die muss vorher definiert werden, 1 funktion machen, exportieren (damit sie verwendet werden kann),
    }
  }

  // Shortcuts fürs Menü (für Menübuttons)
  document.addEventListener("keydown", hndKeyPress); // weil: es gibt versch arten von events, die wir für jeweiligen listener verwenden können. bei window gibts andere zur verfügung als bei doc
  // unterschied keypress & keydown: down = gedrückt halten, press = drücke und loslassen
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.ARROW_DOWN: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.ARROW_LEFT:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M: //M steht für Menu
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(
      inGameMenuButtons,
      buttonFunctionalities,
      "gameMenuCSSclass"
    );
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      { scene: ScnTestzene01, name: "Testszene 01" }, // scene: hier muss name von funktion rein! Name ist was anderes, kann spaces enthalten wegen string
      { scene: Chp01_01_IntroMarketplace, name: "01_01_Intro Marktplatz" },
      { scene: Chp01_E_FlowerMerchant, name: "01_E_Blumenhändler" },
      { scene: Chp01_E_LeatherMerchant, name: "01_E_Schuhhändlerin" },
      { scene: Chp01_02_ConvoMother, name: "01_03_MitMamaReden" },
      { scene: Chp01_03_IntroMirror, name: "01_04_VorstellungSpiegel" },

      { scene: Chp02_01_Dinner, name: "02_01_Abendessen" },
      { scene: Chp02_021_TestWithElena, name: "02_021_ElenaSpiegel" },
      { scene: Chp02_022_TestWithKailani, name:"02_022_KailaniSpiegel"},
      { scene: Chp02_03_FightNeighbor, name:"02_03_StreitNachbarin"},
      
      { scene: Chp03_01_Dressmaker, name: "03_01_JackeSchneiderin"},



    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
