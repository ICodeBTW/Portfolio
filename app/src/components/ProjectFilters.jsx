import { useState, useEffect } from 'react';

const ProjectFilters = ({ categories, statuses, totalProjects }) => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentStatus, setCurrentStatus] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(totalProjects);

  // Capitalize first letter for display
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');

  // Filter projects function
  const filterProjects = () => {
    const projectItems = document.querySelectorAll('.project-item');
    const emptyState = document.getElementById('empty-state');
    let count = 0;
    
    projectItems.forEach(item => {
      const itemCategory = item.dataset.category;
      const itemStatus = item.dataset.status;
      const itemFeatured = item.dataset.featured === 'true';
      
      const categoryMatch = currentCategory === 'all' || itemCategory === currentCategory;
      const statusMatch = currentStatus === 'all' || itemStatus === currentStatus;
      const featuredMatch = !showFeaturedOnly || itemFeatured;
      
      if (categoryMatch && statusMatch && featuredMatch) {
        item.style.display = 'block';
        count++;
      } else {
        item.style.display = 'none';
      }
    });

    setVisibleCount(count);

    // Show/hide empty state
    if (emptyState) {
      if (count === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  // Effect to run filtering when state changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      filterProjects();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [currentCategory, currentStatus, showFeaturedOnly]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
  };

  const handleFeaturedToggle = () => {
    setShowFeaturedOnly(!showFeaturedOnly);
  };

  const resetFilters = () => {
    setCurrentCategory('all');
    setCurrentStatus('all');
    setShowFeaturedOnly(false);
  };

  const hasActiveFilters = currentCategory !== 'all' || currentStatus !== 'all' || showFeaturedOnly;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filter Projects</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            Showing {visibleCount} of {totalProjects} projects
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Category Filters */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  currentCategory === category
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-sm'
                }`}
              >
                {capitalize(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filters */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  currentStatus === status
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-sm'
                }`}
              >
                {capitalize(status)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Toggle */}
        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={showFeaturedOnly}
              onChange={handleFeaturedToggle}
              className="rounded border-gray-300 text-gray-900 focus:ring-gray-500 focus:ring-2 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">Show featured projects only</span>
          </label>
          
          {showFeaturedOnly && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          )}
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {currentCategory !== 'all' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {capitalize(currentCategory)}
                  <button
                    onClick={() => setCurrentCategory('all')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {currentStatus !== 'all' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {capitalize(currentStatus)}
                  <button
                    onClick={() => setCurrentStatus('all')}
                    className="ml-1 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {showFeaturedOnly && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Featured only
                  <button
                    onClick={() => setShowFeaturedOnly(false)}
                    className="ml-1 text-amber-600 hover:text-amber-800"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;