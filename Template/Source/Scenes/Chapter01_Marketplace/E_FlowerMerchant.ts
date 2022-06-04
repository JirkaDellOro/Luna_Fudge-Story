namespace Spiegel_VN {
  export async function Chp01_E_FlowerMerchant(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    // if (dataForSave.pickedThisScene = true)

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    // ***BEGINN DIALOG ***
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_E_Flowermerchant.maincharacter.T0000
    );
    await ƒS.Speech.tell(
      characters.flowerMerchant.name,
      dlg_scn_E_Flowermerchant.flowerMerchant.T0000
    );

    // *** DIALOGUE OPTIONS ***
    let FlowerMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
      iSayAskAboutDecorations: "(Erkunden) Warum habt ihr so wenige Blumen da?",
      iSayLeave: "Auf Wiedersehen!",
    };

    let FlowerMerchantDialogueElement = await ƒS.Menu.getInput(
      FlowerMerchantDialogueElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (FlowerMerchantDialogueElement) {
      case FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
        // continue path here
        await ƒS.Speech.tell(characters.flowerMerchant, "Oh je ... blabla.");
        // dataForSave.score.scoreEmpathyPoints += 10;
        // console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return Chp01_02_ConvoMother();
        break;

      case FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell(
          characters.flowerMerchant,
          "Answer ask about decorations"
        );
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return Chp01_02_ConvoMother();
        break;

      case FlowerMerchantDialogueElementAnswers.iSayLeave:
        // continue path here
        // await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
        ƒS.Speech.clear();
        return Chp01_02_ConvoMother();
        break;

      // case firstDialogueElementAnswers.iSayExploreLeatherMerchant:
      //   // continue path here
      //   await ƒS.Speech.tell(
      //     characters.Mama,
      //     "Choice (Explore) Talk to leather merchant."
      //   );
      //   ƒS.Speech.clear();
      //   return Chp01_E_LeatherMerchant();
      //   break;
    }
  }
}
