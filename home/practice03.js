const user = {
    name: "유광석",
    age: 30,
    hasOverdue: false, // 연체 여부 (true 또는 false)
    borrowedBooksCount: 3 // 현재 대출 중인 책 권수
};

function checkLoanEligibility(user) {
    if(user.hasOverdue === true) {
        console.log("대출 불가: 연체 기록이 있거나 최대 대출 권수를 초과했습니다.")
        return 'rejected';
    }
    else {
        if(user.age<14) {
            console.log("대출 불가: 나이가 어리가나 연체 기록이 있거나 최대 대출 권수를 초과했습니다.")
            return 'rejected';
        }
        else {
            console.log("대출 가능: 정상적으로 책을 대출할 수 있습니다.")
            return 'allowed';
        }
    }
}
checkLoanEligibility(user);
