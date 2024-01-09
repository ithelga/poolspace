//package pro.poolspace.models;
//
//import jakarta.persistence.*;
//
//
//@Entity
//@Table(name = "user_pool")
//public class UserPool {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private Long id;
//
//    private Long user_id;
//
//    private Long pool_id;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "pool_id")
//    private Pool pool;
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Pool getPool() {
//        return pool;
//    }
//
//    public void setPool(Pool pool) {
//        this.pool = pool;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(Long user_id) {
//        this.user_id = user_id;
//    }
//
//    public Long getPool_id() {
//        return pool_id;
//    }
//
//    public void setPool_id(Long pool_id) {
//        this.pool_id = pool_id;
//    }
//}
