function findFamily(){
   var data;
    var FamilyId = $("[id$=txtFamilyID]").val();
    var PrimaryPhonenumber = $("[id$=primePhoneNumber]").val();
    var LastName = $("[id$=lastname]").val();
    if(FamilyId)
    {
        data = {'FamilyId' : FamilyId};
    }
    else if(PrimaryPhonenumber){
        data = {'PrimaryPhonenumber' : PrimaryPhonenumber};
    }
    
    else if(LastName){
        data = {'LastName': LastName};
    }
    
    $.ajax({
        url: 'http://localhost:3000/FindaFamilymember',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success: function(data){
            
            return data;
        },
        error: function(error){
            console.log(error);
        }
    });
}