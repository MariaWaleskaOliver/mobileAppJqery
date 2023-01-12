
/*Function to add a new Review*/
function addReview(){
    if(doValidationOnRating()){
        var restaurantName = $("#txtRestaurantName").val();
        var restaurantId = $("#txtBusinessId").val();
        var stateId = $("#cmbState").val();
        var reviewerEmail = $("#emailId").val();
        var reviewerComments =$("#feedback").val();
        var hasRating = $("#checkbox").prop("checked");
        var  rating1=  $("#txtFoodQuality").val();
        var  rating2=  $("#txtServices").val();
        var  rating3=  $("#txtValue").val();


        var objEvent = new Event(restaurantName, restaurantId, stateId,reviewerEmail,reviewerComments, hasRating, rating1, rating2, rating3);
        Clients.insert(objEvent);
        alert("New Review added");
    }else{
        console.info("Add Review form is invalid");
    }
}
/*Function to update new Review */
function updateReviews() {
    if (doValidationOnRating2) {
        var id = localStorage.getItem("id");
        var restaurantName = $("#txtMOModifyReviewPageName").val();
        var restaurantId = $("#MOModifyReviewPageId").val();
        var stateId = $("#MOModifyReviewPageCmbState").val();
        var reviewerEmail = $("#MOModifyReviewPageEmailId").val();
        var reviewerComments = $("#MOModifyReviewPagefeedback").val();
        var hasRating = '';
        if ($("#checkbox2").is(':checked')) {
            hasRating = 'true'
        } else {
            hasRating = 'false'
        }
        var rating1 = $("#txtFoodQuality2").val();
        var rating2 = $("#txtServices2").val();
        var rating3 = $("#txtValue2").val();

        var objEvent = new Event(restaurantName, restaurantId, stateId, reviewerEmail, reviewerComments, hasRating, rating1, rating2, rating3);
        Clients.update(objEvent, id);
        alert("Form updated successfully ")

    } else {
        console.info("Modify Participant form is invalid");
    }
}
/*handle the cancel btn, go to Home page */
function cancelModification(){
    return "#MOHomePage";
}
/*function to save the default email */
function saveDefalts() {
    var Email = $("#txtDefaultReviewerEnmail").val();
    localStorage.setItem("Email", Email)
}
/*function to load the default email */
function loadDefaults() {
    $("#emailId").val(localStorage.getItem("Email"));
}
/*function to show all Reviews */

/* Handle the calculation for the add page*/
function showSum(){
    var num1 = $("#txtFoodQuality").val();
    var num2 = $("#txtServices").val();
    var num3 = $("#txtValue").val();
    var calculation = ((parseInt(num1) + parseInt(num2) + parseInt(num3))*100/15).toFixed(0);
    $("#sldAge").val(calculation).slider("refresh");
}
/* Handle the calculation for the modify page */
function showSum2(){
    var num1 = $("#txtFoodQuality2").val();
    var num2 = $("#txtServices2").val();
    var num3 = $("#txtValue2").val();
    var calculation2 = ((parseInt(num1) + parseInt(num2) + parseInt(num3))*100/15).toFixed(0);
    $("#sldAge2").val(calculation2).slider("refresh");
}
/*check validations for add page */
function checkValidation(){
    if(doValidationOnRating())
    {
        console.info("Add form is valid ");
    }
    else {
        console.info("Add form is invalid ")
    }
}
/*check validations for review page */
function checkValidation2() {
    if(doValidationOnRating2())
    {
        console.info("Modify form is valid ");
    }
    else {
        console.info("Modify form is invalid ")
    }

}
/*function to show Reviews */
function showReviews(){
    var options = [];

    Clients.selectAll(options,callback);

    function callback(tx, results) {
        console.info("Success: Records selected successfully");
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var id = row['id'];
            var restaurantName = row['restaurantName'];
            var restaurantId = row['restaurantId'];
            var stateId = row['stateId'];
            var reviewerEmail = row['reviewerEmail'];
            var hasRating = row['hasRating'];
            var reviewerComments = row['reviewerComments'];
            var rating1 = row['rating1'];
            var rating2 = row['rating2'];
            var rating3 = row['rating3'];

            console.info(`id: ${id} restaurantName: ${restaurantName} restaurantId: ${restaurantId} stateId: ${stateId} reviewerEmail : ${reviewerEmail } hasRating :${hasRating} reviewerComments  :${reviewerComments} rating1 :${rating1} rating2 :${rating2} rating3 :${rating3}`);

            htmlCode += `               
            <li>
                <a href="#MOModifyReviewPage" data-row-id="${id}">
                 <h2>Id : ${id} </h2>  
                 <h2>Restaurant Name: ${restaurantName} </h2>  
                 <h2>Reviewer Email : ${reviewerEmail} </h2> 
                 <h2>Reviewer Comments: ${reviewerComments} </h2> 
                 <h2>Overall Rating: ${rating1 + rating2 +rating3} </h2>    
                 <a href="#MOModifyReviewPage" data-position-to="window" data-trasition="pop"></a>
                </a>
            </li>
            
                `;
        }
        var lv = $("#lvAll");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id") );
            $(location).prop('href', '#MOModifyReviewPageForm');
        }

        $("#lvAll a").on("click", clickHandler);
    }
}
/*function to show Reviews in the modify page*/
function showReviewsInModifyPage() {
    var id = localStorage.getItem("id");
    var options = [id];
    console.info(id)

    Clients.select(options, callback);

    function callback(tx, results) {
        console.info("Success: Review details selected successfully");

        var row = results.rows[0];
        var id = row['id'];
        var restaurantName = row['restaurantName'];
        var restaurantId = row['restaurantId'];
        var stateId = row['stateId'];
        var reviewerEmail = row['reviewerEmail'];
        var reviewerComments = row['reviewerComments'];
        var hasRating = row['hasRating'];
        var rating1 = row['rating1'];
        var rating2 = row['rating2'];
        var rating3 = row['rating3'];


        console.info(`id: ${id} restaurantName: ${restaurantName} restaurantId: ${restaurantId} stateId: ${stateId}  
                  reviewerEmail : ${reviewerEmail }  reviewerComments: ${reviewerComments} hasRating: ${hasRating}  rating1: ${rating1} rating2: ${rating2} rating3: ${rating3}`);

        $("#txtMOModifyReviewPageName").val(restaurantName);
        $("#MOModifyReviewPageId").val(restaurantId);
        $("#MOModifyReviewPageCmbState").val(stateId);
        $("#MOModifyReviewPageCmbState").selectmenu("refresh");
        $("#MOModifyReviewPageEmailId").val(reviewerEmail);
        $("#MOModifyReviewPagefeedback").val(reviewerComments);
        if (hasRating === 'true') {
            $("#checkbox2").prop("checked", true);
            $("#checkbox2").checkboxradio("refresh");
            $("#hideDiv2").show()
            $("#txtFoodQuality2").val(rating1);
            $("#txtServices2").val(rating2);
            $("#txtValue2").val(rating3);
            var calculation = ((rating1 + rating2 + rating3) *100/15).toFixed(0)
            $("#sldAge2").val(calculation).slider("refresh");

        }
        else {
            $("#checkbox2").prop("checked", false);
        }
    }
    $("#checkbox2").checkboxradio("refresh");


}
/*Update the dropDown with the value from the table */
function updateStatesDropDown() {
    var options = [];
    function callback(tx, results) {
        console.info("Success: States Insert transaction successful")

        var cmbState = $("#cmbState")
        var htmlCode = ''
        for (var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];
            var id = row["id"]
            var stateName = row["name"]
            htmlCode += `               
            <option value="${id}">${stateName}</option>`
        }
        cmbState.html(htmlCode)
        cmbState.selectmenu('refresh', true)
    }

    states.selectAll(options, callback)
}
/*Update the dropDown with the values from the table form the modify page*/
function updateStatesDropDown2() {
    var options = [];

    function callback(tx, results) {
        console.info("Success: States Insert transaction successful")

        var cmbStateModify = $("#MOModifyReviewPageCmbState")
        var htmlCode = ''
        for (var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];
            var id = row["id"]
            var stateName = row["name"]
            htmlCode += `               
            <option value="${id}">${stateName}</option>`
        }

        cmbStateModify.html(htmlCode)
        cmbStateModify.selectmenu('refresh', true)
    }
    states.selectAll(options, callback)

}
/*Delete Review btn*/
function deleteReview(){
    var id = localStorage.getItem("id")
    var options = [id];
    Clients.delete(options);
}
/*Drop the database*/
function deleteDatabase(){
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}
