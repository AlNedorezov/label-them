/**
 * Created by alnedorezov on 5/26/17.
 */
function initSave() {
    /*global Tool*/
    /*eslint no-undef: "error"*/
    Tool.save = function () {
        /*global fromPrototype*/
        /*eslint no-undef: "error"*/
        return fromPrototype(Tool, {
            onClick(isButtonPressed) {
                /*global onSave*/
                /*eslint no-undef: "error"*/
                onSave();
                /*
                 if (typeof isButtonPressed === "boolean" || isButtonPressed instanceof Boolean) {

                 }
                 */
            },
            isProlonged: false,
            buttonId: "btn_save"
        });
    };
}