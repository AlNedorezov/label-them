/**
 * Created by alnedorezov on 5/26/17.
 */
function initHand() {
    Tool.hand = function () {
        return fromPrototype(Tool, {
            onClick: function (isButtonPressed) {
                /*
                 if (typeof isButtonPressed === "boolean" || isButtonPressed instanceof Boolean) {

                 }
                 */
            }
        });
    };
}