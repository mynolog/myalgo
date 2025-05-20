function maskPassword(password) {
  const maskedPassword = [...password]
    .map((char, index) => (index >= password.length - 4 ? char : "*"))
    .join("");
  return maskedPassword;
}

function solution(phone_number) {
  return maskPassword(phone_number);
}
