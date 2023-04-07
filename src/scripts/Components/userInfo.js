export default class UserInfo{
    constructor({userName, userJob}){
        this._name = userName;
        this._job = userJob;
    }
    getUserInfo(){
        return{
            name: this._name.textContent,
            job: this._job.textContent
        }
    }
    setUserInfo(nameInfo, jobInfo){
        this._name.textContent = nameInfo;
        this._job.textContent = jobInfo;
    }
}
