<script>
    var circle = document.getElementbyId("circle");
    var upBtn = document.getElementbyId("upBtn");
    var downBtn = document.getElementbyId("downBtn");

    var rotateValue = circle.style.transform;
    var rotateSum;

    upBtn.onclick = function() {
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }

    downBtn.onclick = function() {
        rotateSum = rotateValue + "rotate(90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }
</script>
