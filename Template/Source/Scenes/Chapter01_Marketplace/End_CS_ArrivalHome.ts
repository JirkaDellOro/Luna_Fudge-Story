namespace Spiegel_VN {
  export async function Chp01_CS_ArrivalHome(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Hannah",
      "Schleife gelungen bei CS angekommen ------------- AAAAAAAAAAAA. Arrival Home"
    );

    // ** RANDOM TEXT ***
    let randomTextChp02FamilyHome = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp02FamilyHome) {
      case 1:
        await ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
        break;

      case 2:
        await ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
        break;

      case 3:
        await ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
        break;

      case 4:
        await ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
        break;

      case 5:
        await ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
        break;

      default:
        await ƒS.Speech.tell("Ich", "Default--------------------");
        break;
    }

    let Chp02PickSceneElementAnswers = {
      iSayHaveDinner: "Abendessen mit Familie.",
      iSayTryMirrorElena: "Spiegel mit Mutti ausprobieren.",
      iSayTryMirrorKailani: "Spiegel mit Kailani ausprobieren",
      iSayPickHerbs: "Kräuter pflücken",
      iSayDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen",
      iSayDiscoverKitchen: "(Erkunden) Ab in die Küche",
      iSayContinue: "Weiter",
    };
    console.log("boolean Abendessen: ");
    console.log(dataForSave.pickedChp02_DinnerScene);

    console.log("boolean Kräuter gepflückt: ");
    console.log(dataForSave.pickedChp02_PickHerbsGarden);

    console.log("boolean Spiegel Elena ausprobiert: ");
    console.log(dataForSave.pickedChp02_TestWithElena);

    console.log("boolean Nachbar Streit: ");
    console.log(dataForSave.pickedChp02_FightNeighbor);

    if (
      !dataForSave.pickedChp02_DinnerScene || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp02_PickHerbsGarden ||
      (!dataForSave.pickedChp02_TestWithElena &&
        !dataForSave.pickedChp02_TestWithKailani) || // wie mach ich hier: entweder, oder?
      !dataForSave.pickedChp02_FightNeighbor
    ) {
      delete Chp02PickSceneElementAnswers.iSayContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp01PickSceneElement = await ƒS.Menu.getInput(
      Chp02PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp01PickSceneElement) {
      case Chp02PickSceneElementAnswers.iSayHaveDinner:
        // continue path here
        await ƒS.Speech.tell("Ich", "Abendessen hm geil.");
        dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return "02_01 Dinner at home"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp02PickSceneElementAnswers.iSayPickHerbs:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Auf geht's Kräuter pflücken");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "02_03 Pick Herbs";
        break;

      case Chp02PickSceneElementAnswers.iSayTryMirrorElena:
        // continue path here
        await ƒS.Speech.tell("Ich", "Mit Mutti Spiegel ausprobieren.");
        ƒS.Speech.clear();
        return "02_021 Test with Elena";
        break;

      case Chp02PickSceneElementAnswers.iSayTryMirrorKailani:
        // continue path here
        await ƒS.Speech.tell("Ich", "Spiegel mit Kailani ausprobieren.");
        ƒS.Speech.clear();
        return "02_022 Test with Kailani";
        break;

      case Chp02PickSceneElementAnswers.iSayDiscoverBedroom:
        // continue path here
        await ƒS.Speech.tell("Ich", "Schlafzimmer anschauen yay sleep.");
        ƒS.Speech.clear();
        return "02_E Discover bedroom";
        break;

      case Chp02PickSceneElementAnswers.iSayDiscoverKitchen:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich hab' Hunger auf geht's.");
        ƒS.Speech.clear();
        return "02_E Discover Kitchen";
        break;

      case Chp02PickSceneElementAnswers.iSayContinue:
        // continue path here
        await ƒS.Speech.tell("Ich", "Weiter zur cut scene.");
        ƒS.Speech.clear();
        return "02_CS Sleep";
        break;
    }
    return "";
  }
}
