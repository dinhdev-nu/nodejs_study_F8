const handlebars = require('handlebars')


module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) =>{
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'bi bi-funnel',
            desc: 'bi bi-sort-alpha-down-alt',
            asc: 'bi bi-sort-alpha-down',
        }

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }

        const icon = icons[sortType]
        const type = types[sortType]

        const addresss =   handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        const output = `<a href="${addresss}"><i class="${icon}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ></svg></i></a>`
        return new handlebars.SafeString(output); 
    }
}