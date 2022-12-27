    
    const sbiBank = {
        bankName: 'SBI Bank',
        location: 'Mumbai',
        accountNo: 7837482028,
        IFSC: 'SBIN000045',
        interestRate: 8.15,
        showDetails: function(){
            console.log(`Invoke SBI Bank Object details using function`);
            console.log(sbiBank);
        }
    }

    const axisBank = {
        bankName: 'AXIS Bank',
        location: 'Pune',
        accountNo: 7837482028,
        IFSC: `AXIS000067`,
        interestRate: 9.07,
        showDetails: function(){
            console.log(`Invoke AXIS Bank Object details using function`);
            console.log(axisBank);
        }
    }

    const hdfcBank = {
        bankName: 'HDFC Bank',
        location: 'Airoli',
        accountNo: 7837482028,
        IFSC: `HDFC000091`,
        interestRate: 8.65,
        showDetails: function(){
            console.log(`Invoke HDFC Bank Object details using function`);
            console.log(hdfcBank);
        }
    }

    const yesBank = {
        bankName: 'Yes Bank',
        location: 'Bankglore',
        accountNo: 7837482028,
        IFSC: `YES0000456`,
        interestRate: 8.70,
        showDetails: function(){
            console.log(`Invoke Yes Bank Object details using function`);
            console.log(yesBank);
        }
    }
sbiBank.showDetails();
console.log(``);
axisBank.showDetails();
console.log(``);
hdfcBank.showDetails();
console.log(``);
yesBank.showDetails();


