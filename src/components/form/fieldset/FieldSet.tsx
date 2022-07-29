import PropTypes from 'prop-types'

type FieldSetProps = {
    children: React.ReactNode
    title: string
}

function FieldSet({ children, title }: FieldSetProps) {
    return (
        <fieldset className="mb-3">
            <legend>{title}</legend>
            {children}
        </fieldset>
    )
}

export default FieldSet

FieldSet.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}
