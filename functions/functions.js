// students score , total possible score 

//an parei 15/20 -> You got a C(75%)

// a 90 - 100 , b 80-89, c 70-79, D 60-69 . F 0-59


let gradeCalculator = function(studentScore, possibleMaxscore) {

    let percentage = ( studentScore / possibleMaxscore ) * 100

    if ( percentage <= 100 && percentage >= 90 ) {
        console.log(`You got A(${percentage})`)
    }
    }

}

gradeCalculator(19,20)