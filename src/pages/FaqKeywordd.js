import React from 'react';

const FaqSectionn = ({ idPrefix = 'accordion', faqItems = [] }) => {
  return (
    <section className="faq-section pb-0 fix">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            {faqItems.map((columnItems, columnIndex) => (
              <div className="col-lg-12" key={columnIndex}>
                <div className="faq-items">
                  <div className="faq-accordion">
                    <div className="accordion" id={`${idPrefix}-${columnIndex}`}>
                      {columnItems.map((item, index) => {
                        const collapseId = `${idPrefix}-col${columnIndex}-item${index}`;
                        return (
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay={`.${(index + 1) * 2}s`}
                            key={index}
                          >
                            <h5 className="accordion-header">
                              <button
                                className={`accordion-button ${item.open ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded={item.open ? 'true' : 'false'}
                                aria-controls={collapseId}
                              >
                                {item.question}
                              </button>
                            </h5>
                            <div
                              id={collapseId}
                              className={`accordion-collapse collapse ${item.open ? 'show' : ''}`}
                              data-bs-parent={`#${idPrefix}-${columnIndex}`}
                            >
                              <div className="accordion-body">{item.answer}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSectionn;
