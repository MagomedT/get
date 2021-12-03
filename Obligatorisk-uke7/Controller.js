        // controller
        function doClick() {
            points += pointsPerClick;
            smileyIndex = getNextSmileyIndex(smileyIndex);
            updateView();
        }

        function buyUpgrade() {
            if (points < 10) return;
            points -= 10;
            pointsPerClick++;
            updateView();
        }

        function reset(){
            points = 0;
            pointsPerClick = 1;
            smileyIndex = 0;
            updateView();
        }

        function downGrade(){
            if (pointsPerClick < 2) return;
            pointsPerClick--;
            points += 10;
            updateView();
        }

        function increasePointsPerClick(){
            pointsPerClick++;
            updateView();
        }

        
        function decreasePointsPerClick(){
            if(pointsPerClick>0){
                pointsPerClick--;
            }
            updateView();
        }

        function displayName(){
            var input = document.getElementById("userInput").value;
            playerName = input;
            playerPoints = points;
            updateView();
        }

        function getSmiley(aSmileyIndex) {
            if(aSmileyIndex == 0) return '😀';
            if(aSmileyIndex == 1) return '😁';
            if(aSmileyIndex == 2) return '<img src="Terje.jpeg">';
            return '';
        }

        function getNextSmileyIndex(aSmileyIndex) {
            const maxSmileyIndex = 2;
            aSmileyIndex++;
            if (aSmileyIndex > maxSmileyIndex) {
                aSmileyIndex = 0;
            }
            return aSmileyIndex;
        }