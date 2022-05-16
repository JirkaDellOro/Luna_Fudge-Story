declare namespace Spiegel_VN {
    function HowToMakeChoices(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    function NameDerFunktion(): void;
    function Addition(Zahl1?: number, Zahl2?: number): void;
    let dataForSave: {
        nameProtagonist: string;
        score: number;
    };
    let inventory: {
        apple: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function showCredits(): void;
}
declare namespace Spiegel_VN {
    let minPoints: number;
    let maxPoints: number;
    let points: number;
    function UpdateBar(): Promise<void>;
    function DisplaySanityBar(show: boolean): void;
    function SetPoints(num: number): void;
    function AddPoints(num: number): void;
    function SubPoints(num: number): void;
    function GetPoints(): number;
}
declare namespace Spiegel_VN {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
}
declare namespace Spiegel_VN {
    let characters: {
        maincharacter: {
            name: string;
        };
        Mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Mutti: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Kailani: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Evarius: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Flynn: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
    };
}
declare namespace Spiegel_VN {
    let locations: {
        Chp01_01_IntroMarketplace: {
            name: string;
            background: string;
        };
    };
}
declare namespace Spiegel_VN {
    let score: {
        punkte: number;
        teeGetrunken: boolean;
    };
    let scoreMutti: {
        punkte: number;
        affection: number;
        introduced: boolean;
    };
}
declare namespace Spiegel_VN {
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_01: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        Mama: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_02: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        Mama: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    function ScnTestzene01(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function ScnTestzene02(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_01_IntroMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_02_ConvoMother(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_03_IntroMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_FlowerMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_LeatherMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_01_Dinner(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_021_TestWithElena(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_022_TestWithKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_FightNeighbor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverGarden(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverKitchen(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_01_Dressmaker(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_021_FirewoodKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_022_WaterWellKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_03_TurmoilMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverDonkey(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverLibrary(): ƒS.SceneReturn;
}
