/* Mark Joshua B. Burgos
   CMSC 128 AB - 7L
 */

/**
	This function accepts number and travevrses the number per integer while determining its place value. the number is converted to string for 
	easy traversal. If a number is encountered,	first if determine the number's value and then its place value. After doing so, we concatenate 
	the right word equivalent of the number to the string that contains the answer. After traversal, the word will be complete and ready for 
	returning 
**/
function numToWords(num){
	var word = "";
	if(num <= 1000000 && num >= 0){
		
		num = num.toString();
				
		for(var i = num.length; i > 0; i--){
			switch(i){
				case 7: if(num[num.length - i] == 1){
							word = word + "one million ";
						} 
					break;
				case 6: 
					if(num[num.length - i] == 0){
						break;
					} else if(num[num.length - i] == 1){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "one hundred thousand";
						} else{
							word = word + "one hundred ";
						}
					} else if(num[num.length - i] == 2){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "two hundred thousand";
						} else{
							word = word + "two hundred ";
						}
					} else if(num[num.length - i] == 3){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "three hundred thousand";
						} else{
							word = word + "three hundred ";
						}
					} else if(num[num.length - i] == 4){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "four hundred thousand";
						} else{
							word = word + "four hundred ";
						}
					} else if(num[num.length - i] == 5){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "five hundred thousand";
						} else{
							word = word + "five hundred ";
						}
					} else if(num.length - i == 6){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "six hundred thousand";
						} else{
							word = word + "six hundred ";
						}
					} else if(num[num.length - i] == 7){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "seven hundred thousand";
						} else{
							word = word + "seven hundred ";
						}
					} else if(num[num.length - i] == 8){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "eight hundred thousand";
						} else{
							word = word + "eight hundred ";
						}
					} else if(num[num.length - i] == 9){
						if(num[num.length - (i - 1)] == 0 && num[num.length - (i - 2)] == 0){
							word = word + "nine hundred thousand";
						} else{
							word = word + "nine hundred ";
						}
					}
					break;
				case 5: if(num[num.length - i] == 0){
						break;
					} else if(num[num.length - i] == 1){
						if(num[num.length - (i - 1)] == 0){
							word = word + "ten thousand ";
						} else{
							word = word + getNext(num, num.length, i, 1);									
						}
					} else if(num[num.length - i] == 2){
						word = word + "twenty ";
					} else if(num[num.length - i] == 3){
						word = word + "thirty ";
					} else if(num[num.length - i] == 4){
						word = word + "forty ";
					} else if(num[num.length - i] == 5){
						word = word + "fifty ";
					} else if(num[num.length - i] == 6){
						word = word + "sixty ";
					} else if(num[num.length - i] == 7){
						word = word + "seventy ";
					} else if(num[num.length - i] == 8){
						word = word + "eighty ";
					} else if(num[num.length - i] == 9){
						word = word + "ninety ";
					}
					break;
				case 4: 
					if(num[num.length - i - 1] != 0){
						if(num[num.length - i] == 0){
							word = word + "thousand ";
							break;
						}	
					}
					if(num[num.length - i] == 1){
						word = word + "one thousand ";
					} else if(num[num.length - i] == 2){
						word = word + "two thousand ";
					} else if(num[num.length - i] == 3){
						word = word + "three thousand ";
					} else if(num[num.length - i] == 4){
						word = word + "four thousand ";
					} else if(num[num.length - i] == 5){
						word = word + "five thousand ";
					} else if(num[num.length - i] == 6){
						word = word + "six thousand ";
					} else if(num[num.length - i] == 7){
						word = word + "seven thousand ";
					} else if(num[num.length - i] == 8){
						word = word + "eight thousand ";
					} else if(num[num.length - i] == 9){
						word = word + "nine thousand ";
					}
				
					break;
				case 3:
					
					if(num[num.length - i] == 1){
						word = word + "one hundred ";
					} else if(num[num.length - i] == 2){
						word = word + "two hundred ";
					} else if(num[num.length - i] == 3){
						word = word + "three hundred ";
					} else if(num[num.length - i] == 4){
						word = word + "four hundred ";
					} else if(num[num.length - i] == 5){
						word = word + "five hundred ";
					} else if(num[num.length - i] == 6){
						word = word + "six hundred ";
					} else if(num[num.length - i] == 7){
						word = word + "seven hundred ";
					} else if(num[num.length - i] == 8){
						word = word + "eight hundred ";
					} else if(num[num.length - i] == 9){
						word = word + "nine hundred ";
					}		
					 		
					break;
				case 2:
					if(num[num.length - i] == 1){
						if(num[num.length - (i - 1)] == 0){
							word = word + "ten";
						}
						else {
							word = word + getNext(num, num.length, i, 0);
						}
					} else if(num[num.length - i] == 2){
						word = word + "twenty ";
					} else if(num[num.length - i] == 3){
						word = word + "thirty ";
					} else if(num[num.length - i] == 4){
					 	word = word + "forty ";
					} else if(num[num.length - i] == 5){
						word = word + "fifty ";
					} else if(num[num.length - i] == 6){
						word = word + "sixty ";
					} else if(num[num.length - i] == 7){
						word = word + "seventy ";					
					} else if(num[num.length - i] == 8){
						word = word + "eighty ";
					} else if(num[num.length - i] == 9){
						word = word + "ninety ";
					}
					break;	
				case 1:
					if(num[num.length - i] == 1){
						word = word + "one";						
					} else if(num[num.length - i] == 2){
						word = word + "two";						
					} else if(num[num.length - i] == 3){
						word = word + "three";						
					} else if(num[num.length - i] == 4){
						word = word + "four";					
					} else if(num[num.length - i] == 5){
						word = word + "five";						
					} else if(num[num.length - i] == 6){
						word = word + "six";						
					} else if(num[num.length - i] == 7){
						word = word + "seven";						
					} else if(num[num.length - i] == 8){
						word = word + "eight";						
					} else if(num[num.length - i] == 9){
						word = word + "nine";						
					}
				default: break;
			} 
			
		}
	}
	return word;
}

/**
	This function accepts a string (a word form of a number) in which it determines the numerical equivalent of it. It is dependent on the given
	place value in the string. It traverses the string and checks every place value and the value corresponding to it. Then the value will be 
	computed by multiplying the value found by it's corresponding place value. The value computed will be then added to the variable containing 
	the summation of the values.
**/
function wordsToNum(words){
	var num = 0;
	words = words.split(' ');
	for(var i = 0; i <= words.length - 1; i++){
		switch(words[i]){

			case "million"	: if(getPrevious(words[i-1]) == 1){
								num = num + (getPrevious(words[i-1]) * 1000000);
								} else{
									return "GREATER THAN 1M";
								}
								break;	
			case "thousand"	: if(i - 2 >= 0){
									if(words[i-3] == "hundred"){
										num = num + (getPrevious(words[i-4])*100000);
										num = num + (getPrevious(words[i-2])*1000);
										num = num + (getPrevious(words[i-1])*1000);
									} else if(words[i-2] == "hundred"){
										num = num + (getPrevious(words[i-3])*100000);
										num = num + (getPrevious(words[i-1])*1000);
									} else if(words[i-1] == "hundred"){
										num = num + (getPrevious(words[i-2])*100000);
									} else{
										for(var j = i-1; j >= 0; j--){
											num = num + (getPrevious(words[j])*1000);			
										}
									}
								} else{
									num = num + (getPrevious(words[i-1])*1000);
								}
								break;
			case "hundred"	: if(words[i+1] != "thousand"){
									if(i + 3 == words.length || i + 2 == words.length || i + 1 == words.length){
										num = num + (getPrevious(words[i-1])*100);
									}
								}	
								
								break;			
			default			: if(i + 2 == words.length && words[i+1] != "hundred" && words[i+1] != "thousand" && words[i+1] != "million"){
									num = num + (getPrevious(words[i]));
								} else if(i + 1 == words.length){
									num = num + (getPrevious(words[i]));
								}	
								break;
		}
	} 
	if(words.length == 1){
		num = num + (getPrevious(words[0]));
	}
	return num;
}

/**
	This function accepts a word format of numbers and a currency. It simply call the function above and appends the currency to the return 
	value of the function above. 
**/

function wordsToCurrency(words, currency){
	var num = wordsToNum(words);

	switch(currency){
		case "USD" : return "USD " + num;
		case "JPY" : return "JPY " + num;
		case "PHP" : return "Php " + num;
	}
}

/**
	This function simply puts delimiter given in an given interval (skip). It simply jumps at the given interval and put the delimiter given. 
**/

function numberDelimited(num, delimiter, skip){
	if(delimiter.length == 1 && num >= 0 && skip >= 0 && num <= 1000000){
		num = num.toString();
		
		if(num.length <= skip){
			return num;
		} else{			
			var newString = "";
			var i = 0;
			for(i = num.length - 1; i > num.length - skip - 1; i--){
				newString = num[i] + newString;
			}

			newString = delimiter + newString;
			
			
			while(i >= skip){
				for(var counter = i; i > counter - skip; i--){
					newString = num[i] + newString;		
				}
				newString = delimiter + newString;	
			}
			
			for(var j = i; j >= 0; j--){
				newString = num[i] + newString;
				i--;
			}
			
			return newString;
				
		}
	} else{
		return "THIS IS NOT APPLICABLE!";
	}
}

/**
	This function gets the next value of the converted interger to string. It simply determine the numerical value of the next set of
	numbers and return it's word form.
**/

function getNext(num, length, index, counter){
	index--;
	if(counter == 1){
		if(num[length - index] == 1){
			return "eleven thousand ";
		} else if(num[length - index] == 2){
			return "twelve thousand ";
		} else if(num[length - index] == 3){
			return "thirteen thousand ";
		} else if(num[length - index] == 4){
			return "fourteen thousand ";
		} else if(num[length - index] == 5){
			return "fifteen thousand ";
		} else if(num[length - index] == 6){
			return "sixteen thousand ";
		} else if(num[length - index] == 7){
			return "seventeen thousand ";
		} else if(num[length - index] == 8){
			return "eighteen thousand ";
		} else if(num[length - index] == 9){
			return "nineteen thousand ";
		}
	} else{
		if(num[length - index] == 1){
			return "eleven ";
		} else if(num[length - index] == 2){
			return "twelve ";
		} else if(num[length - index] == 3){
			return "thirteen ";
		} else if(num[length - index] == 4){
			return "fourteen ";
		} else if(num[length - index] == 5){
			return "fifteen ";
		} else if(num[length - index] == 6){
			return "sixteen ";
		} else if(num[length - index] == 7){
			return "seventeen ";
		} else if(num[length - index] == 8){
			return "eighteen ";
		} else if(num[length - index] == 9){
			return "nineteen ";
		}
	}
	
}

/**
	This function, honestly, at first its main function is to get the previous value in the string and return its numerical form but 
	it is flexible. It is not restricted to previous values only. it can be used for current value or next value. 
**/

function getPrevious(word){
	switch(word){
		case "one"		: return 1;
		case "two"		: return 2;
		case "three"	: return 3;
		case "four"		: return 4;
		case "five"		: return 5;
		case "six"		: return 6;
		case "seven"	: return 7;
		case "eight"	: return 8;
		case "nine"		: return 9;
		case "ten"		: return 10;
		case "eleven"	: return 11;
		case "twelve"	: return 12;
		case "thirteen"	: return 13;
		case "fourteen"	: return 14;
		case "fifteen"	: return 15;
		case "sixteen"	: return 16;
		case "seventeen": return 17;
		case "eighteen"	: return 18;
		case "nineteen"	: return 19;
		case "twenty"	: return 20;
		case "thirty"	: return 30;
		case "forty"	: return 40;
		case "fifty"	: return 50;
		case "sixty"	: return 60;
		case "seventy"	: return 70;
		case "eighty"	: return 80;
		case "ninety"	: return 90;
	}
}
