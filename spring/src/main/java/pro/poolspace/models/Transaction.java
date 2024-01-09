//package pro.poolspace.models;
//import jakarta.persistence.*;
//
//
//@Entity
//@Table(name = "transactions")
//
//public class Transaction {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "category_id")
//    private TransactionCategory transactionCategory;
//
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_pool_id")
//    private UserPool userPool;
//
//    private Long user_pool_id;
//
//    private Long category_id;
//
//    private double amount;
//
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getUser_pool_id() {
//        return user_pool_id;
//    }
//
//    public void setUser_pool_id(Long user_pool_id) {
//        this.user_pool_id = user_pool_id;
//    }
//
//    public Long getCategory_id() {
//        return category_id;
//    }
//
//    public void setCategory_id(Long category_id) {
//        this.category_id = category_id;
//    }
//
//    public double getAmount() {
//        return amount;
//    }
//
//    public void setAmount(double amount) {
//        this.amount = amount;
//    }
//}
