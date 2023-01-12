
$(document).ready(function(){
 init();
 initDB();
});
/*Here is Where I add my events for the btns and pageShow, add my init functions and call the function on facade*/
function showResult(){
    showSum();
}
function showResult2(){
    showSum2();
}
function btnSaveRating(){
    checkValidation();
}
function btnAdd_click(){
addReview();
}
function btnDelete_click(){
    deleteDatabase();
}
function btnUpdate2() {
    checkValidation2();
}
function showPageReview_show(){
   showReviews();
}
function pageInfo_show(){
    showReviewsInModifyPage();
}
function btnUpdate_click() {
    updateReviews();
}
function btnDeleteModfyPage_click(){
    deleteReview();
}
function btnSaveDefalts_click(){
    saveDefalts();
}
function settingsLoaded() {
    loadDefaults();
}
function  btnSaveCancel_click (){
    cancelModification();
}
function init(){
    $("#hideDiv").hide()
    $("#checkbox").click(function(){
        if($("#checkbox").is(":checked")){
            $("#hideDiv").show()
        } else{
            $("#hideDiv").hide()
        }
    });
    $("#hideDiv2").hide()
    $("#checkbox2").click(function(){
        if($("#checkbox2").is(":checked")){
            $("#hideDiv2").show()
        } else{
            $("#hideDiv2").hide()
        }
    });
    $("#txtFoodQuality").on("change", showResult );
    $("#txtServices").on("change", showResult );
    $("#txtValue").on("change", showResult );
    $("#MOAddReviewPage").on("pageshow",   updateStatesDropDown);
    $("#btnSaveAddPage").on("click", btnSaveRating);
    $("#txtFoodQuality2").on("change", showResult2 );
    $("#txtServices2").on("change", showResult2 );
    $("#txtValue2").on("change", showResult2 );
    $("#btnUpdateReview").on("click", btnUpdate2);
    $("#btnSaveAddPage").on("click", btnAdd_click);
    $("#btnClearDatabase").on("click", btnDelete_click);
    $("#MOViewReviewPage").on( "pageshow", showPageReview_show);
    $("#MOModifyReviewPage").on( "pageshow",  pageInfo_show);
    $("#MOModifyReviewPage").on( "pageshow",  updateStatesDropDown2);
    $("#btnDelete").on("click", btnDeleteModfyPage_click);
    $("#btnUpdateReview").on("click", btnUpdate_click);
    $("#btnSaveDefault").on("click", btnSaveDefalts_click);
    $("#MOSettingsPage").on( "pageshow",  settingsLoaded )
    $("#btnCancel").on("click", btnSaveCancel_click);
    loadDefaults();
}
function initDB(){
    try{
        DB.createDatabase();
        if(db){
            console.info("Creating Tables...");
            DB.createTables();
        }else{
            console.error("Error: Cannot create tables: Database does not exist");
        }
    }catch(e){
        console.error("Error : Error in initDB. Can not proceed");
    }
}