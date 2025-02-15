const lengthOfLastWord = '   fly me   to   the moon  '.trim()
    |> function (s) { console.log('1: ', s); return s.split(' ') }
    |> function (s) { console.log('2: ', s); return s.filter(e => e.length) }
    |> function (s) { console.log('3: ', s); return s.at(-1) }
    |> function (s) { console.log('4: ', s); return s.length }

console.log(lengthOfLastWord);