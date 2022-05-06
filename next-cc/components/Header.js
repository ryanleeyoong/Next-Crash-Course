import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News 
        </h1>
        <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
        
    </div>
  )
}

/* <style jsx> Can be used in specific cases like this 
    const x = 2

    <style jsx>
            {`
                .title{
                    color: ${x > 3 ? 'red' : 'blue'}; <- If ?(then) :(else)
                }
            `}
    </style>
*/
export default Header