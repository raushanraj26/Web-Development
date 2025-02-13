//it is custom error class file
//extends error c;ass which in express

class expressError extends Error{
    constructor(status,message){  //take 2 parameter
        super();
        this.status=status;
        this.message=message;
    }
}
module.exports=expressError;