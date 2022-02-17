module.exports = function makeCard(element) {
    
    const employeeInfo = []
    console.log(Object.values(element))

    console.log(employeeInfo)
    return (`
        <div>
            ${employeeInfo.forEach(i => {
                return ``
            })}
        </div>
    `)
}