//package pro.poolspace.models;
//import jakarta.persistence.*;
//
//import java.util.List;
//
//
//@Entity
//@Table(name = "admins")
//public class Admin {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private Long user_id;
//    private Long fond_id;
//    private Boolean is_editable;
//
//    @ElementCollection
//    private List<Long> pool_ids;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    public User getUser() {
//        return user;
//    }
//
//    public Fond getFond() {
//        return fond;
//    }
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "fond_id")
//    private Fond fond;
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
//    public Long getFond_id() {
//        return fond_id;
//    }
//
//    public void setFond_id(Long fond_id) {
//        this.fond_id = fond_id;
//    }
//
//    public Boolean getIs_editable() {
//        return is_editable;
//    }
//
//    public void setIs_editable(Boolean is_editable) {
//        this.is_editable = is_editable;
//    }
//
//    public List<Long> getPool_ids() {
//        return pool_ids;
//    }
//
//    public void setPool_ids(List<Long> pool_ids) {
//        this.pool_ids = pool_ids;
//    }
//
//}
