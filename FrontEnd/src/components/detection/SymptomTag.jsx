import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const SymptomTag = ({ text, onRemove }) => {
  return (
    <div className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm flex items-center gap-2">
      {text}
      <button 
        onClick={onRemove}
        className="cursor-pointer flex items-center justify-center hover:text-red-500 transition-colors"
        aria-label="Hapus gejala"
      >
        <FaTimes />
      </button>
    </div>
  )
}

SymptomTag.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default SymptomTag