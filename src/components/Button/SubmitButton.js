import css from './SubmitButton.module.css'

export const SubmitButton = ({ children }) => {
    return (
        <button className={ css.customButton} type="submit">{ children}</button>
    )
}