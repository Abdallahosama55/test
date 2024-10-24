import React from 'react';

function ProductOptimizedUseCase() {
  const useCases = [
    {
      id: 1,
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lsed do eiusmod tempor incididunt ut',
      colSpan: 'col-span-2',
    },
    {
      id: 2,
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lsed do eiusmod tempor incididunt ut',
      colSpan: 'col-span-1',
    },
    {
      id: 3,
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lsed do eiusmod tempor incididunt ut',
      colSpan: 'col-span-1',
    },
    {
      id: 4,
      title: 'Customer Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lsed do eiusmod tempor incididunt ut',
      colSpan: 'col-span-2',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-black text-center w-full text-[3em]">Optimized for enterprise use cases</h1>
      <div className="grid mx-32 py-12 md:grid-cols-3 gap-6 grid-cols-1">
        {useCases.map((useCase) => (
          <div
            key={useCase.id}
            className={`${useCase.colSpan} border-[#9b9beb2c] border-[1px] p-6  pt-4 bg-[#C6C6C617] rounded-2xl`}
          >
            <h1 className="text-[#692BEF] text-lg font-bold">{useCase.title}</h1>
            <p className="text-[#4b4b4b]">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOptimizedUseCase;
