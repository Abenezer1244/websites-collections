'use client'

interface CardData {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  delay: string
}

interface WhyChooseCardsProps {
  cards: CardData[]
}

export function WhyChooseCards({ cards }: WhyChooseCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 relative z-10 py-4" style={{overflow: 'visible', isolation: 'isolate'}}>
      {cards.map((card, index) => (
        <div 
          key={index}
          className={`group relative z-20 animate-slideup-delay-${index + 1}`}
          style={{
            overflow: 'visible', 
            transform: 'translateY(0)', 
            transition: 'transform 0.3s ease', 
            willChange: 'transform', 
            position: 'relative'
          }} 
          onMouseEnter={(e) => { 
            e.currentTarget.style.transform = 'translateY(-8px)'; 
            e.currentTarget.style.zIndex = '100'; 
          }} 
          onMouseLeave={(e) => { 
            e.currentTarget.style.transform = 'translateY(0)'; 
            e.currentTarget.style.zIndex = '20'; 
          }}
        >
          <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden" style={{position: 'relative', zIndex: 1}}>
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
              {card.title}
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              {card.description}
            </p>
            
            {/* Feature List */}
            <ul className="space-y-3">
              {card.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

