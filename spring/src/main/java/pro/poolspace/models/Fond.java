package pro.poolspace.models;
import jakarta.persistence.*;

@Entity
@Table(name = "fonds")
public class Fond {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean isPublic;


    public String getCategoryName() {
        return fondCategory.getName();
    }
    public String getFounderName() {
        return user.getName();
    }
    public String getFounderSurname() {
        return user.getSurname();
    }



    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "founder_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private FondCategory fondCategory;


    public void setFondCategory(FondCategory fondCategory) {
        this.fondCategory = fondCategory;
    }

    public User getUser() {
        return user;
    }

    public FondCategory getFondCategory() {
        return fondCategory;
    }

    public Fond() {

    }

    public Fond(String name, int category, Long founderId, boolean isPublic) {
        this.name = name;
        this.isPublic = isPublic;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isPublic() {return isPublic;}

    public void setPublic(boolean isPublic) {this.isPublic = isPublic;}


}
