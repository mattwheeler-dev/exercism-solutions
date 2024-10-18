# Task 1: Check valid command
export function isValidCommand(command) {
  const regex = /^chatbot/i;
  return regex.test(command);
};

# Task 2: Remove encrypted emojis
export function removeEmoji(message) {
  const regex = new RegExp(/emoji\d{4}/gim);
  return message.replace(regex, '');
};

# Task 3: Check valid phone number
export function checkPhoneNumber(number) {
  const regex = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/;
  if (regex.test(number) == true) {
    return 'Thanks! You can now download me to your phone.'
  } else {
    return `Oops, it seems like I can't reach out to ${number}`
  };
};

# Task 4: Get website link
export function getURL(userInput) {
  const regex = /\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;
  return userInput.match(regex);
};

# Task 5: Greet user
export function niceToMeetYou(fullName) {
  const arr = fullName.split(/, /);
  return `Nice to meet you, ${arr[1]} ${arr[0]}`
};
