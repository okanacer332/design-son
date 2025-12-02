import { useState } from 'react';
import { Palette, Users, TrendingUp, Map, Code, Database, Globe, Layers, ChevronDown } from 'lucide-react';

interface ServicesProps {
  mode: 'design' | 'code';
}

export function Services({ mode }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const designServices = [
    {
      icon: Palette,
      title: 'UX Consultant',
      description: 'Strategic UX guidance to optimize user experiences and drive business growth through data-driven insights.'
    },
    {
      icon: Layers,
      title: 'Product Design',
      description: 'End-to-end product design from concept to launch, creating intuitive interfaces that users love.'
    },
    {
      icon: TrendingUp,
      title: 'New Business Development',
      description: 'Strategic design thinking to identify opportunities and create compelling digital products for growth.'
    },
    {
      icon: Map,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in your customer\'s journey for maximum engagement.'
    },
    {
      icon: Users,
      title: 'CRM Marketing',
      description: 'Design customer relationship strategies that boost retention and create lasting brand loyalty.'
    }
  ];

  const codeServices = [
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise resource planning solutions that streamline operations across your organization.'
    },
    {
      icon: Globe,
      title: 'B2B Platforms',
      description: 'Scalable B2B web and mobile platforms that connect businesses and drive commerce efficiently.'
    },
    {
      icon: Code,
      title: 'SaaS Development',
      description: 'Cloud-based software as a service solutions built for scale, security, and seamless user experiences.'
    },
    {
      icon: Layers,
      title: 'Corporate Software',
      description: 'Specialized software development tailored to your industry sector and business requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Custom Solutions',
      description: 'Bespoke enterprise applications designed to solve your unique business challenges and workflows.'
    }
  ];

  const services = mode === 'design' ? designServices : codeServices;
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 opacity-10 ${
        mode === 'design' 
          ? 'bg-gradient-to-b from-purple-500/20 to-transparent' 
          : 'bg-gradient-to-b from-blue-500/20 to-transparent'
      }`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 ${
            mode === 'design'
              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
          }`}>
            Our Services
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4 ${
            mode === 'design'
              ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent'
          }`}>
            {mode === 'design' ? 'Design Expertise' : 'Development Solutions'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {mode === 'design' 
              ? 'Comprehensive UX-UI design services focused on creating exceptional user experiences and driving business results.'
              : 'Enterprise-grade software development services delivering robust, scalable solutions for modern businesses.'}
          </p>
        </div>

        {/* Services Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-lg sm:rounded-xl backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? mode === 'design'
                      ? 'bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/20'
                      : 'bg-blue-500/10 border-blue-500/40 shadow-lg shadow-blue-500/20'
                    : mode === 'design'
                      ? 'bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/30'
                      : 'bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/30'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-3 sm:p-4 lg:p-5 flex items-center gap-3 sm:gap-4 text-left"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    mode === 'design'
                      ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500 group-hover:shadow-lg group-hover:shadow-purple-500/50'
                      : 'bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/50'
                  }`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg lg:text-xl mb-1 ${
                      mode === 'design' ? 'text-purple-200' : 'text-blue-200'
                    }`}>
                      {service.title}
                    </h3>
                    {!isExpanded && (
                      <p className="text-xs sm:text-sm text-gray-500 truncate pr-2">
                        {service.description}
                      </p>
                    )}
                  </div>
                  
                  <ChevronDown 
                    className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    } ${mode === 'design' ? 'group-hover:text-purple-300' : 'group-hover:text-blue-300'}`}
                  />
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5 pl-11 sm:pl-14 lg:pl-16">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {services.length > 4 && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 border text-sm sm:text-base ${
                mode === 'design'
                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50'
                  : 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50'
              }`}
            >
              {showAll ? 'Show Less' : `Load More Services (${services.length - 4})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
