import "./style/profile.css"
function Profile(){
    return(
        <div>
            <div class="container-pro  rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-4 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="../logo192.png"/><span class="font-weight-bold">NAME</span><span class="text-black-50">Rank:</span><span> </span></div>
            </div>
            <div class="col-md-8 border-right ">
                <div class="p-3 py-5 tex">
                    <div class="d-flex justify-content-between align-items-center mb-3 ">
                        <h3 >User Profile </h3>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12"><label class="labels">Full Name</label><input type="text" class="form-control" placeholder="Enter your full name" style={{borderColor: "cornflower blue"}} value=""/></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" placeholder="Enter your phone number" style={{borderColor: "cornflower blue"}} value=""/></div>
                        <div class="col-md-12"><label class="labels">National ID</label><input type="text" class="form-control" placeholder="Enter your National ID" style={{borderColor: "cornflower blue"}} value=""/></div>
                        <div class="col-md-12"><label class="labels">Email</label><input type="email" class="form-control" placeholder="Enter your email" style={{borderColor: "cornflower blue"}} value=""/></div>
                    </div>
                    <div class="mt-5 text-center"><button class="btn text-white profile-button" type="button" style={{backgroundColor: "cornflower blue"}}>Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}
export default Profile;