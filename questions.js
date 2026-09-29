const prompt = require("readline-sync");


//the array for the questions in the geography category
let questions = Array() 
questions [0] = ["what is the capital of Australia","Melbourn", "Perth", "Sydney", "cannebra"];//cannebra
questions [1] = ["In what country is mount Everest in?", "Japan", "Mongolia", "Nepal", "Argentina"];//nepal
questions [2] = ["What are the primary colours of the flag of Bahrain?", "green & red", "orange % yellow", "green & white", "red & white"];//red and white 
questions [3] = ["In what country would you find the kremlin?","Russia", "Ukraine", "Belarus", "Georgia"];//russia
questions [4] = ["what country has the largest population in the world?", "China", "India", "Pakistan", "USA"];//india
//the array for the questions for the history category
questions [5] = ["in what year did WW2 start?", 1938, 1939, 1940, 1935];//1939
questions [6] = ["Who was the fist woman to win the Nobel piece prize?"," Bertha von Suttner ","Jane Addams ", "Emily Greene Balch ", "Mother Teresa "];//bertha
questions [7] = ["What year was the great fire of london?", 1664, 1666, 1777, 1888 ];//1666
questions [8] = ["Where was the first olympic games held?", "Italy", "Greece", "England", "Mexico"];//greece
questions [9] = ["What year was the moon landing?", 1955, 1984, 1969, 1990];//1969
//the array for the tv/movies category
questions [10] = ["In what year was Harry Potter and the Philosopher's Stone released?", 2001, 2007, 2013, 2005];//2001
questions [11] = ["How many Back to the Future","movies were made?", 2, 3, 4, 5];//3
questions [12] = ["Who played the character Rose in the movie,Titanic?","Kate Winslet","Gloria Stuart","Kirsten Dunst","Matt Damon" ];//kate winslet 
questions [13] = ["How many oscars did the movie Oppenheimer get at the 2024 Oscars", 5, 7, 10, 11];//7
questions [14] = ["What movie has made the most money of all time in sales?", "Avatar", "Avengers Endgame", "Titanic", "Star Wars: The Force Awakens "];//avatar
//the array for sports category
questions [15] = ["Who is the current F1 champion?",  "George Russel", "Lando Norris", "Lewis Hamilton","Max Verstappen"];//Lanod norris 
questions [16] = ["What year was the first world cup",1938, 1890, 1930, 1940 ];//1930
questions [17] = ["How many point is a bullseye worth in darts?", 45, 55, 100, 50];//50
questions [18] = ["How many minutes long is a game of ice hockey?", 40, 90, 60, 80];//60
questions [19] = ["Who won the first ballon d'or?"," Denis Law", " Lev Yashin", " Stanley Matthews", " Johan Cruyff " ]; //stanley matthews
// each row is a question and each collumn is an answer 
console.log(questions [10][1]);