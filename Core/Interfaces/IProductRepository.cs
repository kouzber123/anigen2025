using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type, string? sort);
    Task<Product> GetProductByIdAsync(int id);
    Task<IReadOnlyList<string>> GetBrandsAsync();
    Task<IReadOnlyList<string>> GetTypesAsync();
    void DeleteProduct(Product product);
    void AddProduct(Product product);
    void UpdateProduct(Product product);
    bool ProductExists(int id);
    Task<bool> SaveChangesAsync();
}
