import PropTypes from 'prop-types'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-3">
      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-5">
        <span className="text-primary text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-4">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureCard