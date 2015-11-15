function findFamily(){
   var data;
    var FamilyId = $("id$=txtFamilyID").val('');
    var PrimaryPhonenumber = $("id$=primePhoneNumber");
    var LastName = $("id$=lastname").val();
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
        url: 'localhost:3000/FindaFamilymember',
        type: 'GET',
        data : JSON.stringify(data),
        success: function(data){
            return data;
        },
        error: function(error){
            console.log(error);
        }
    });
}