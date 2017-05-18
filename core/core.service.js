(function () {
    'use strict';


    function coreService(localStorageService) {

        var $ctrl = this;

        var items = [
            {
                itemName: 'First item with custom name',
                commentCount: 132,
                comments: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef',
                    'salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    'Tail ground round ham hock beef ribs leberkas',
                    'sirloin rump jowl ribeye. Biltong fatback salami capicola pork',
                    'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle ' +
                    'meatloaf corned beef beef ribs short ribs shank filet mignon turkey. Brisket chuck leberkas,' +
                    'chicken spare ribs shankle corned beef salami filet mignon. Pancetta biltong jerky leberkas tongue.' +
                    ' Tail ground round ham hock beef ribs leberkas sirloin rump jowl ribeye. Biltong ' +
                    'fatback salami capicola pork', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bacon ipsum dolor amet jerky chuck brisket turducken, shankle meatloaf corned' +
                    'beef beef ribs short ribs shank filet mignon turkey.',
                    'Brisket chuck leberkas, chicken spare ribs shankle corned beef']
            },
            {
                itemName: 'Second item is active',
                commentCount: 3,
                comments: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
            }
        ];

        $ctrl.data = {
            navItems: ['Overview'],
            items: items
        };

        var getData = localStorageService.get;
        var setData = localStorageService.set;

        (function () {
            if (!getData('localData')) {

                setData('localData', $ctrl.data);

            } else {

                $ctrl.data = getData('localData');

            }
        })();


        return {

            getStore: function () {
                return $ctrl.data;


            },
            setItem: function (data) {
                $ctrl.data.items.push(data);
                setData('localData', $ctrl.data);

            },
            deleteItem: function (data) {

                $ctrl.data.items.splice($ctrl.data.items.indexOf(data), 1);
                setData('localData', $ctrl.data);

            },
            addComment: function (item, comment) {

                $ctrl.data.items[item].comments.push(comment);
                $ctrl.data.items[item].commentCount++;
                setData('localData', $ctrl.data);

            },
            getItemIndex: function (item) {

                return $ctrl.data.items.indexOf(item);

            }
        };


    }

    angular
        .module('app')
        .factory('coreService', coreService);

    coreService.$inject = ['localStorageService'];

})();

