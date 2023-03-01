/* eslint-disable no-plusplus */
(function() {
  
  const createPlayer = (name, marker) => {
    const whoAmI = () => console.log(`name: ${name}, marker: ${marker}`);
    return {name, marker, whoAmI};
  }
  
  const game = {
    board() {
      this.gameboard = [];
      this.rows = 3;
      this.columns = 3;
      for (let i = 0; i < this.rows; i++) {
        this.gameboard[i] = [];
        const rowDiv = document.createElement("div");
        rowDiv.append(this.gameboard[i]);
        rowDiv.classList.add('row')
        this.gameDiv.append(rowDiv);
        for (let j = 0; j < this.columns; j++) {
          this.gameboard.push('_');
          const squareDiv = document.createElement('div');
          squareDiv.classList.add('square');
          squareDiv.append(this.gameboard[i]);
          const button = document.createElement('input');
          button.setAttribute('type', 'submit');
          button.value = "X";
          squareDiv.append(button);
          rowDiv.append(squareDiv);
        }
      }
    },
    init() {
      this.cacheDom();
      this.render();
    },
    cacheDom() {
      this.gameDiv = document.querySelector(".gameboard");
    },
    render() {
      this.board();
    }
  };
  
  game.init();

})();