"use strict";
var Template;
(function (Template) {
    async function IXDPrototype() {
        console.log("FudgeStory IXDScene starting");
        console.log("FudgeStory IXD Scene Stella starting");
        console.log("Prototype IXD startking");
        await Template.ƒS.Location.show(Template.locations.Sandstrand);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Ira, "come, lets dance");
        await Template.ƒS.Character.hide(Template.characters.Ira);
        let IXDPrototype = {
            iPickleft: "left",
            iPickright: "right"
        };
        let IXDPrototypeStep1 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep1) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "Do you remember");
        let IXDPrototypeStep2 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep2) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "the time we danced");
        let IXDPrototypeStep3 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep3) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "beneath stars");
        let IXDPrototypeStep4 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep4) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "with nothing but");
        let IXDPrototypeStep5 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep5) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "the Music of howling winds");
        let IXDPrototypeStep6 = await Template.ƒS.Menu.getInput(IXDPrototype, "choicesCSSClass");
        switch (IXDPrototypeStep6) {
            case IXDPrototype.iPickleft:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
            case IXDPrototype.iPickright:
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Ira, Template.characters.Ira.pose.right, Template.ƒS.positionPercent(70, 100));
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.Ira);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Ira, "End of Prototype");
    }
    Template.IXDPrototype = IXDPrototype;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        puzzle: {
            duraion: 1,
            alpha: "",
            edge: 1
        }
    };
    //ingame Menu
    let ingameMenubuttons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        close: "close"
    };
    let gameMenu;
    //open entspricht Menü ist open und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case ingameMenubuttons.save:
                await Template.ƒS.Progress.save();
                break;
            case ingameMenubuttons.load:
                await Template.ƒS.Progress.load();
                break;
            case ingameMenubuttons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    //Menu Shortcuts
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Menu is Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    //*vor dem Hintergrund komm der Sound*//
    Template.sound = {
        //themes
        //SFX
        drop: "sounddatei pfad!"
        //Character text generating sound
    };
    Template.locations = {
        citySteampunk: {
            name: "citySteampunk",
            background: "Images/Bckground/d810e64a496e7465e3c6312b65946c4b.jpg"
        },
        Sandstrand: {
            name: "Strand",
            background: "Images/Bckground/nightsky.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        barkeeper: {
            name: ""
        },
        stella: {
            name: "Stella",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Stella.jpg"
            }
        },
        alessaButWithoutName: {
            name: "unbekannter Pestdoktor",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        alessa: {
            name: "Alessa",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/Alessa.PNG"
            }
        },
        elidibusButWithoutName: {
            name: "unbekannter Jäger",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        elidibus: {
            name: "Elidibus",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        Ira: {
            name: "Ira",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Charakter/DancingIraleft.PNG",
                right: "Images/Charakter/DancingIraright.PNG"
            }
        }
    };
    //*data will be safed (game progress)*//
    Template.dataForSave = {
        nameBarkeeper: "",
        variableKristalhöhle: false,
        variableRätselsceneAlessa1: false
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(ingameMenubuttons, buttonFunctionalities, "gameMenuCSSClass");
        // ****SCENE HIERACHY!!!!!!!
        let scenes = [
            { scene: Template.IXDPrototype, name: "Stella and Alessa seeing each other" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        console.log("FudgeStory Template Scene Stella starting");
        console.log("first Scene Stella starting");
        await Template.ƒS.Location.show(Template.locations.citySteampunk);
        //await ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.stella, Template.characters.stella.pose.normal, Template.ƒS.positionPercent(0, 0));
        await Template.ƒS.update();
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map