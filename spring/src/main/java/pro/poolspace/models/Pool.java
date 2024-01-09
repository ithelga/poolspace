//package pro.poolspace.models;
//import jakarta.persistence.*;
//
//import java.util.List;
//
//
//@Entity
//@Table(name = "pools")
//public class Pool {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "category_id")
//    private PoolCategory poolCategory;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "currency_id")
//    private Currency poolCurrency;
//
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "fond_id")
//    private Fond fond;
//
//
//    public PoolCategory getPoolCategory() {
//        return poolCategory;
//    }
//
//    public Currency getPoolCurrency() {
//        return poolCurrency;
//    }
//
//    public Fond getFond() {
//        return fond;
//    }
//
//    private String name;
//
//    private double min_profit;
//
//    private double max_profit;
//
//    private double real_profit;
//
//    private double min_contrib;
//
//    private Long currency;
//
//    private double max_contrib;
//
//    private double total_deposit;
//
//    private String category;
//
//    private Long fond_id;
//
//    // Геттеры и сеттеры для каждого поля
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public double getMin_profit() {
//        return min_profit;
//    }
//
//    public void setMin_profit(double min_profit) {
//        this.min_profit = min_profit;
//    }
//
//    public double getMax_profit() {
//        return max_profit;
//    }
//
//    public void setMax_profit(double max_profit) {
//        this.max_profit = max_profit;
//    }
//
//    public double getReal_profit() {
//        return real_profit;
//    }
//
//    public void setReal_profit(double real_profit) {
//        this.real_profit = real_profit;
//    }
//
//    public double getMin_contrib() {
//        return min_contrib;
//    }
//
//    public void setMin_contrib(double min_contrib) {
//        this.min_contrib = min_contrib;
//    }
//
//    public Long getCurrency() {
//        return currency;
//    }
//
//    public void setCurrency(Long currency) {
//        this.currency = currency;
//    }
//
//    public double getMax_contrib() {
//        return max_contrib;
//    }
//
//    public void setMax_contrib(double max_contrib) {
//        this.max_contrib = max_contrib;
//    }
//
//    public double getTotal_deposit() {
//        return total_deposit;
//    }
//
//    public void setTotal_deposit(double total_deposit) {
//        this.total_deposit = total_deposit;
//    }
//
//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }
//
//    public Long getFond_id() {
//        return fond_id;
//    }
//
//    public void setFond_id(Long fond_id) {
//        this.fond_id = fond_id;
//    }
//}
