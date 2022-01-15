const heh = 'keeeeeeek'

const obj = {
  name: 'biba',
  noname: 'boba'
}

const kek = () => {
  const babelMe = heh.startsWith('ke')
  const {biba, boba} = { ...obj }
  console.log(babelMe);
  console.log(biba + '-' + boba );
}

const init = () => kek();

init()
