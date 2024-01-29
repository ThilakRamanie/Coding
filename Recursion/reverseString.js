// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str1) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length === 1) return str1;
  return str1[str1.length - 1] + reverse(str1.slice(0, str1.length - 1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
