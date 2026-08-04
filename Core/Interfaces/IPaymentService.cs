using Core.Entities;

namespace Core.Interfaces;

public interface IPaymentService
{
    // our backend only ceates intent
    Task<ShoppingCart?> CreateorUpdatePaymentIntent(string cartId);
}
