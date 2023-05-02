declare namespace Template {
    function IXDPrototype(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duraion: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        citySteampunk: {
            name: string;
            background: string;
        };
        Sandstrand: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        barkeeper: {
            name: string;
        };
        stella: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        alessaButWithoutName: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        alessa: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        elidibusButWithoutName: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        elidibus: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Ira: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                right: string;
            };
        };
    };
    let dataForSave: {
        nameBarkeeper: string;
        variableKristalhöhle: boolean;
        variableRätselsceneAlessa1: boolean;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
